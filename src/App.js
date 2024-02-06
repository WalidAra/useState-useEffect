/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import "./App.css";
import "./styles/tail.css";
import { useEffect } from "react";
import Card from "./components/UI/Card";
import { useContext } from "react";
import userContext, { useUserContext } from "./components/context/user";
import UserProvider from "./components/context/user";

function App() {
  const [users, setUsers] = useState([]); //0
  const firstUser = useUserContext();

  const getData = async () => {
    const result = await fetch("https://randomuser.me/api/?results=10");
    const data = await result.json();
    setUsers(data.results);
    firstUser.setfirstUser(data.results[0]);
  };

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        firstUser.setfirstUser(data.results[0]);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  return (
    <div className="w-full h-screen py-32 ">
      <div className="container m-auto flex gap-3 flex-wrap">
        {users.map((user, index) => {
          return (
            <Card
              key={index}
              username={user.login.username}
              fullName={user.name.first + " " + user.name.last}
              image={user.picture.medium}
              bio={user.location.street.number + " " + user.location.city}
            />
          );
        })}
      </div>
      <button className="text-white bg-red-500 " onClick={getData}>
        {" "}
        fetch data{" "}
      </button>
    </div>
  );
}

export default App;
