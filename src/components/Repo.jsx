import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri";
import Style from "./Repo.module.css";
const Repo = ({ name, language, html_url, forks_count, stargazers_count }) => {
  return (
    <div className={Style.repo}>
      <h3>{name}</h3>
      <p className={Style.languages}>
        <BsCodeSlash />
        <span>{language}</span>
      </p>

      <div className={Style.stats}>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <a className={Style.repo_btn} href={html_url} target="_blank">
        <span>Ver código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  );
};

export default Repo;
