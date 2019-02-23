import React, { useState } from 'react';
import { Link } from '@reach/router';
import uuid from 'uuid/v4';

const NewArticle = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSubmitClick = () => {
    dispatch({ type: 'SAVE_ARTICLE', id: uuid(), data: { title, body } });
  };

  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span role="img" aria-label="Back" style={{ fontSize: 28 }}>👈</span>
      </Link>
      <h1>New Article</h1>
      <div><input type="text" onChange={handleTitleChange} value={title} /></div>
      <div><textarea onChange={handleBodyChange} value={body} /></div>
      <button type="submit" onClick={handleSubmitClick}>Submit</button>
    </div>
  );
};

export default NewArticle;
