import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

const Article = ({ articles, id }) => {
  const article = articles[id];

  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span role="img" aria-label="Back" style={{ fontSize: 28 }}>👈</span>
      </Link>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
    </div>
  );
};

Article.propTypes = {
  articles: PropTypes.object.isRequired,
  id: PropTypes.string
};

Article.defaultProps = {
  id: null
};

export default Article;
