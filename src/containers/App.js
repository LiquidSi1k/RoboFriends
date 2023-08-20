import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import AddEmail from "../AddEmail";

function App() {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  };

  return !robots.length ? (
    <h1 className="tc">Loading page. Please wait..</h1>
  ) : (
    <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <AddEmail />

      <Scroll>
        <h3>Existing RoboFriends</h3>
        <CardList
          robots={robots.filter((robot) =>
            robot.name.toLowerCase().includes(searchfield.toLowerCase())
          )}
        />
      </Scroll>
    </div>
  );
}

export default App;
