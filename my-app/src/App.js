import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GitHub from './GitHub';
import LeetCode from './LeetCode';
import CodeChef from './CodeChef';
import Description from './Description';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* create a top-level route that renders the landing page content and the Description component */}
        <Route
          path="/"
          element={
            <>
              <h1>CodeRec</h1>
              <p>To compare GitHub profiles, click on this button:</p>
              <ul>
                <li><a href="/github">GitHub</a></li>
              </ul>
              <p>To compare LeetCode profiles, click on this button:</p>
              <ul>
                <li><a href="/leetcode">LeetCode</a></li>
              </ul>
              {/* <p>To compare CodeChef profiles, click on this button:</p> */}
              {/* <ul>
                <li><a href="/codechef">CodeChef</a></li>
              </ul> */}
              {/* render the Description component here if you want it to appear only for the landing page */}
              <Description />
            </>
          }
        />
        {/* create a wildcard route that renders another Routes component with the other routes */}
        <Route
          path="*"
          element={
            <>
              {/* render another Routes component with the GitHub, LeetCode and CodeChef routes */}
              {/* these routes will not have the landing page content or the Description component */}
              <Routes>
                <Route path="/github" element={<GitHub />} />
                <Route path="/leetcode" element={<LeetCode />} />
                <Route path="/codechef" element={<CodeChef />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;