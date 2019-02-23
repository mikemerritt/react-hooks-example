import React, { useState } from 'react';
import { Link } from '@reach/router';
import uuid from 'uuid/v4';
import Remarkable from 'remarkable';

const NewArticle = ({ dispatch }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const md = new Remarkable();

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
      <div style={{ marginBottom: 40 }}>
        <input
          style={{
            display: 'block',
            width: 800,
            padding: 20,
            paddingTop: 10,
            paddingBottom: 10,
            marginBottom: 30,
            fontSize: 22,
            border: '1px solid gray'
          }}
          type="text"
          onChange={handleTitleChange}
          value={title}
          placeholder="Title..."
        />
        <textarea
          style={{
            display: 'block',
            width: 800,
            padding: 20,
            border: '1px solid gray',
            fontSize: 16,
            fontFamily: 'helvetica, arial, sans-serif',
            marginBottom: 20
          }}
          onChange={handleBodyChange}
          value={body}
          rows={20}
        />
        <button
          style={{
            display: 'block',
            padding: 20,
            paddingTop: 10,
            paddingBottom: 10,
            width: 150,
            fontSize: 22
          }}
          type="submit"
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </div>
      <p>Preview:</p>
      <div
        style={{
          width: 800,
          padding: 20,
          border: '1px solid gray',
          fontFamily: 'Helvetica, Arial, sans-serif'
        }}
        dangerouslySetInnerHTML={{ __html: md.render(body) }}
      />
    </div>
  );
};

export default NewArticle;
