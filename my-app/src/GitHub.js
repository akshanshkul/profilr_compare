// src/Github.js
import React, { useState } from "react";
import "./GitHub.css";
import Compare from "./Compare";
// define a variable to store your token value
const MY_GITHUB_TOKEN = 'GITHUB TOKEN FOR 5000 requests';

function App() {
  // use state hooks to store the input values and the comparison data
  const [users, setUsers] = useState(["", ""]);
  const [data, setData] = useState(null);

  // handle the input changes
  const handleChangeUser = (e, index) => {
    // make a copy of the users array
    const newUsers = [...users];
    // update the value at the given index
    newUsers[index] = e.target.value;
    // set the users state with the updated array
    setUsers(newUsers);
  };

  // handle adding a new input field
  const handleAddUser = () => {
    // make a copy of the users array
    const newUsers = [...users];
    // push an empty string to the array
    newUsers.push("");
    // set the users state with the updated array
    setUsers(newUsers);
  };

  // handle removing the last input field
  const handleRemoveUser = () => {
    // make a copy of the users array
    const newUsers = [...users];
    // pop the last element from the array
    newUsers.pop();
    // set the users state with the updated array
    setUsers(newUsers);
  };

  // handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // validate the inputs
    if (users.length < 2) {
      alert("Please enter at least two usernames");
      return;
    }
    if (users.some((user) => !user)) {
      alert("Please fill all the usernames");
      return;
    }
    // make an API call to the backend with the usernames
    try {
      const response = await fetch(
        `http://localhost:3001/api/compare/github/?users=${users.join(
          ","
        )}&access_token=${MY_GITHUB_TOKEN}`
      );
      const data = await response.json();
      // set the data state with the comparison data
      setData(data);
    } catch (error) {
      // handle any errors

      if (data == null) {
        alert("Wrong Username");
        window.location.reload();
      } else {
        console.error(error);
        alert("Something went wrong");
        console.log(error);
      }
    }
  };

  return (
    <div className="App">
      <h1>CodeRec: Compare GitHub Profiles</h1>
      <form onSubmit={handleSubmit}>
        {users.map((user, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Enter username ${index + 1}`}
            value={user}
            onChange={(e) => handleChangeUser(e, index)}
          />
        ))}
        <button type="button" onClick={handleAddUser}>
          Add User
        </button>
        <button type="button" onClick={handleRemoveUser}>
          Remove User
        </button>
        <button type="submit">Compare</button>
      </form>
      {/* render the Compare component only if data is not null */}
      {data && <Compare data={data} />}
    </div>
  );
}

export default App;