import React, { useEffect, useState } from "react";
import axios from "axios";

const Welcome = () => {
  const [user, setUser] = useState();

  const refreshToken = async () => {
    const res = await axios
      .get("http://localhost:5000/api/refresh", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  const sednRequest = async () => {
    const res = await axios
      .get("http://localhost:5000/api/user", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sednRequest().then((data) => setUser(data.user));
    }
    let interval = setInterval(() => {
      refreshToken().then((data) => setUser(data.user));
    }, 1000 * 29);
    return () => clearInterval(interval);
  }, []);

  return <div>
    {user && <h1>{user.name}</h1>}
    <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/main">project data</Link>
        </li>
    </div>;
};

export default Welcome;
