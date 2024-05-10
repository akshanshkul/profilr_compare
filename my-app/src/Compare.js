// src/Compare.js
import React from "react";
import "./Compare.css";

function Compare({ data }) {
  // destructure the data object
  const { users, scores } = data;

  // determine the winner based on the scores
  let winner = "";
  let maxScore = Math.max(...scores);
  if (scores.every((score) => score === maxScore)) {
    winner = "Tie";
  } else {
    winner = users[scores.indexOf(maxScore)].username;
  }

  // check which platform the data is from
  const isGitHub = users[0].hasOwnProperty("public_repos");
  const isLeetCode = users[0].hasOwnProperty("totalSolved");

  return (
    <div className="compare">
      <h2>Comparison Result</h2>
      <p>The winner is: {winner}</p>
      <div className="users">
        {users.map((user, index) => (
          <div key={index} className="user">
            {/* render different images based on the platform */}
            {isGitHub && (
              <img src={user.avatar} alt={user.username} />
            )}
            {isLeetCode && (
              <img src={`https://leetcode.com/${user.username}/avatar_160/`} alt={user.username} />
            )}
            <h3>{user.username}</h3>
            {/* render different metrics based on the platform */}
            {isGitHub && (
              <>
                <p>Name: {user.name}</p>
                <p>Bio: {user.bio}</p>
                <p>Followers: {user.followers}</p>
                <p>Following: {user.following}</p>
                <p>Public Repos: {user.public_repos}</p>
              </>
            )}
            {isLeetCode && (
              <>
                <p>Total Solved: {user.totalSolved} / {user.totalQuestions}</p>
                <p>Easy Solved: {user.easySolved} / {user.totalEasy}</p>
                <p>Medium Solved: {user.mediumSolved} / {user.totalMedium}</p>
                <p>Hard Solved: {user.hardSolved} / {user.totalHard}</p>
                <p>Acceptance Rate: {user.acceptanceRate}%</p>
                <p>Ranking: #{user.ranking}</p>
                <p>Contribution Points: {user.contributionPoints}</p>
                <p>Reputation: {user.reputation}</p>
              </>
            )}
            {/* render the score for all platforms */}
            <p>Score: {scores[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Compare;