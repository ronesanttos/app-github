import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Style from "./Repository.module.css";
import BackBtn from "../components/BackBtn";
import Loader from "../components/Loader";
import Repo from "../components/Repo";

const Repository = () => {
  const { username } = useParams();

  const [repos, setRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadRepos = async function (username) {

      setIsLoading(true);

      const res = await fetch(`https://api.github.com/users/${username}/repos`);

      const data = await res.json();

      let orderedRepos = data.sort((a,b) => b.stargazers_count - a.stargazers_count)
      orderedRepos = orderedRepos.slice(0,5)

      setIsLoading(false);
      setRepos(orderedRepos)

    };

    loadRepos(username);
  }, []);

  if(!repos && isLoading) return <Loader/>
  return (
    <div className={Style.repository}>
      <BackBtn />
      <h2>Explore os repositórios do usúario: {username}</h2>
      {repos && repos.length === 0 && <p>Não há repositórios.</p>}
      {repos && repos.length > 0 && (
        <div className={Style.repository_container}>
          {repos.map((repo) => (
            <Repo key={repo.name} {...repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Repository;
