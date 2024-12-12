import { useState } from "react";
import Search from "../components/Search";
import Card from "../components/Card";
import Erro from "../components/Erro";
import Loader from "../components/Loader";

const Home = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loadUser = async (userName) => {
    setIsLoading(true);
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    setIsLoading(false);

    if (res.status === 404) {
      setError(true);
      return;
    }
    const { avatar_url, login, location, followers, following } = data;
    const userData = { avatar_url, login, location, followers, following };
    setUser(userData);
  };

  console.log(user);

  return (
    <div>
      <Search loadUser={loadUser} />
      {isLoading && <Loader />}
      {user && <Card {...user} />}
      {error && <Erro />}
    </div>
  );
};

export default Home;
