import React from 'react';
import './Description.css';

const Description = () => {
  return (
    <div className="description">
      <h2>About CodeRec</h2>
      <p>CodeRec is a website that allows you to compare two or more public profiles from GitHub, LeetCode, and CodeChef. You can see how your coding skills and achievements stack up against others by entering their usernames or profile URLs. CodeRec will fetch the user data from each platform and display it in charts and graphs for easy comparison.</p>
      <h3>How to use CodeRec</h3>
      <ul>
        <li>Select the platform you want to compare from the tabs above.</li>
        <li>Enter the usernames or profile URLs of the users you want to compare in the input fields.</li>
        <li>Click on the compare button to see the results.</li>
      </ul>
      <h3>Tech stacks used for this project</h3>
      <ul>
        <li>Frontend: React, HTML, CSS, JavaScript</li>
        <li>Backend: Node.js, Express.js</li>
        <li>GitHub API: to fetch user data</li>
        <li>Chart.js: to create charts and graphs for the comparison data</li>
      </ul>
      <p>This project was inspired by a friend who wanted to compare his coding skills with others. The main challenge was to handle the different APIs and data formats of each platform. The future plans for this project include adding more features like filtering, sorting, and sharing the comparison results.</p>
      <p>Feel free to clone this repo and contribute to this project. You can also check out the live demo here:</p>
      <a href="https://techcov.in">https://techcov.in</a>
    </div>
  );
};

export default Description;