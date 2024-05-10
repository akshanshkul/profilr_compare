// server/server.js
const express = require("express");
const axios = require("axios");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require("cors");

app.use(cors());
app.get("/api/compare/github", async (req, res) => {
  // get the usernames from the query parameters
  const users = req.query.users.split(",");

  // validate the inputs
  if (users.length < 2) {
    return res.status(400).json({ message: "Please provide at least two usernames" });
  }

  try {
    // create an array to store the data and the scores
    const data = [];
    const scores = [];

    // loop through the usernames and fetch the data from the GitHub API
    for (let user of users) {
      console.log(user);
      const response = await axios.get(`https://api.github.com/users/${user}`);
      // extract the relevant data
      const userData = {
        username: response.data.login,
        name: response.data.name,
        avatar: response.data.avatar_url,
        bio: response.data.bio,
        followers: response.data.followers,
        following: response.data.following,
        public_repos: response.data.public_repos,
      };
      // push the data to the data array
      data.push(userData);
      // calculate the score and push it to the scores array
      const score =
        userData.followers * 2 +
        userData.following +
        userData.public_repos * 3;
      scores.push(score);
    }

    // return the comparison data as JSON
    res.json({
      users: data,
      scores: scores,
    });
  } catch (error) {
    // handle any errors
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.get("/api/compare/leetcode", async (req, res) => {
  // get the usernames from the query parameters
  const users = req.query.users.split(",");

  // validate the inputs
  if (users.length < 2) {
    return res.status(400).json({ message: "Please provide at least two usernames" });
  }

  try {
    // create an array to store the data and the scores
    const data = [];
    const scores = [];

    // loop through the usernames and fetch the data from the LeetCode API
    for (let user of users) {
      const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${user}`);
      // extract the relevant data
      const userData = {
        username: user,
        totalSolved: response.data.totalSolved,
        totalQuestions: response.data.totalQuestions,
        easySolved: response.data.easySolved,
        totalEasy: response.data.totalEasy,
        mediumSolved: response.data.mediumSolved,
        totalMedium: response.data.totalMedium,
        hardSolved: response.data.hardSolved,
        totalHard: response.data.totalHard,
        acceptanceRate: response.data.acceptanceRate,
        ranking: response.data.ranking,
        contributionPoints: response.data.contributionPoints,
        reputation: response.data.reputation,
      };
      // push the data to the data array
      data.push(userData);
      // calculate the score and push it to the scores array
      const score =
        userData.totalSolved * 10 +
        userData.easySolved * 1 +
        userData.mediumSolved * 2 +
        userData.hardSolved * 3 +
        userData.acceptanceRate * 5 +
        userData.contributionPoints * 2 +
        userData.reputation * 2 -
        userData.ranking / 1000;
      scores.push(score);
    }

    // return the comparison data as JSON
    res.json({
      users: data,
      scores: scores,
    });
  } catch (error) {
    // handle any errors
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});
app.get("/api/compare/codechef", async (req, res) => {
  // get the usernames from the query parameters
  const users = req.query.users.split(",");

  // validate the inputs
  if (users.length < 2) {
    return res.status(400).json({ message: "Please provide at least two usernames" });
  }

  try {
    // create an array to store the data and the scores
    const data = [];
    const scores = [];

    // loop through the usernames and fetch the data from the LeetCode API
    for (let user of users) {
      const response = await axios.get(`https://leetcode-stats-api.herokuapp.com/${user}`);
      // extract the relevant data
      const userData = {
        username: user,
        totalSolved: response.data.totalSolved,
        totalQuestions: response.data.totalQuestions,
        easySolved: response.data.easySolved,
        totalEasy: response.data.totalEasy,
        mediumSolved: response.data.mediumSolved,
        totalMedium: response.data.totalMedium,
        hardSolved: response.data.hardSolved,
        totalHard: response.data.totalHard,
        acceptanceRate: response.data.acceptanceRate,
        ranking: response.data.ranking,
        contributionPoints: response.data.contributionPoints,
        reputation: response.data.reputation,
      };
      // push the data to the data array
      data.push(userData);
      // calculate the score and push it to the scores array
      const score =
        userData.totalSolved * 10 +
        userData.easySolved * 1 +
        userData.mediumSolved * 2 +
        userData.hardSolved * 3 +
        userData.acceptanceRate * 5 +
        userData.contributionPoints * 2 +
        userData.reputation * 2 -
        userData.ranking / 1000;
      scores.push(score);
    }

    // return the comparison data as JSON
    res.json({
      users: data,
      scores: scores,
    });
  } catch (error) {
    // handle any errors
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});