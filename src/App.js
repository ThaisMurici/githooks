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
  }, []); // executed only once - componentDidMount

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);

    document.title = `You have ${filtered.length} favorites.`;
  }, [repositories]); // executed everytime `repositories` changes - componentDidUpdate

  function handleFavorite(id) {
    const updatedRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });

    setRepositories(updatedRepositories);
  }

  return (
    <ul>
      {repositories.map(repo => (
        <li key={repo.id}>
          {repo.name}
          {repo.favorite && <span> (*)</span>}
          <button onClick={() => handleFavorite(repo.id)}>
            Mark as favorite
          </button>
        </li>
      ))}
    </ul>
  );
}

export default App;
