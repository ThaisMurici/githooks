import React, { useState, useEffect } from "react";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchRepositories() {
      const response = await fetch(
        "https://api.github.com/users/thaismurici/repos"
      );
      const data = await response.json();

      setRepositories(data);
    }
    fetchRepositories();
  }, []); // executed only once

  return (
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
