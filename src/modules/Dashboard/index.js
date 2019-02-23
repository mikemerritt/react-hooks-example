import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const Dashboard = ({ articles }) => (
  <div>
    <h1>React Hooks Example</h1>
    <Link to="/articles/new" style={{ textDecoration: 'none' }}>
      <span role="img" aria-label="Back" style={{ fontSize: 28 }}>📝</span>
    </Link>
    <ul>
      {
        Object.keys(articles).map(key => (
          <li key={articles[key].title}>
            <Link to={`/articles/${key}`}>{articles[key].title}</Link>
          </li>
        ))
      }
    </ul>
  </div>
);

Dashboard.propTypes = {
  articles: PropTypes.object.isRequired
};

export default Dashboard;
