import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import Remarkable from 'remarkable';

const Article = ({ articles, id }) => {
  const article = articles[id];
  const md = new Remarkable();

  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span role="img" aria-label="Back" style={{ fontSize: 28 }}>👈</span>
      </Link>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md.render(article.body) }} />
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
