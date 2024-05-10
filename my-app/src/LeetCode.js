// src/LeetCode.js
import React, { useState } from "react";
import "./LeetCode.css";
import Compare from "./Compare";

function LeetCode() {
  // use state hooks to store the input values and the comparison data
  const [users, setUsers] = useState(["", ""]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

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
    // set the loading state to true
    setLoading(true);
    // make an API call to the backend with the usernames and platform
    try {
      const response = await fetch(
        `http://localhost:3001/api/compare/leetcode?users=${users.join(",")}`
      );
      const data = await response.json();
      // set the data state with the comparison data
      setData(data);
      // set the loading state to false
      setLoading(false);
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
      // set the loading state to false
      setLoading(false);
    }
};

return (
  <div className="LeetCode">
    <h1>CodeRec: Compare LeetCode Profiles</h1>
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
    {/* render a loading message or a spinner while the data is loading */}
    {loading && <p>Loading...</p>}
    {/* render the Compare component only if data is not null */}
    {data && <Compare data={data} />}
  </div>
);
}

export default LeetCode;