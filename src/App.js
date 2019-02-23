import React, { useReducer } from 'react';
import { Router } from '@reach/router';
// import uuid from 'uuid/v4';

import Dashboard from './modules/Dashboard';
import Article from './modules/Article';
import NewArticle from './modules/NewArticle';

const initialState = {
  articles: {
    'adb04bd5-e86c-4103-9913-f14aec08a3c4': { title: 'Test Article', body: 'this is the body' },
    '044cd3bc-a229-488c-9ecf-8e23d1bb10fc': { title: 'Another Article', body: 'Woah this body is pretty cool!' }
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SAVE_ARTICLE':
      return { ...state, articles: { ...state.articles, [action.id]: action.data } };
    default:
      return { ...state };
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <Dashboard path="/" articles={state.articles} />
      <Article path="/articles/:id" articles={state.articles} />
      <NewArticle path="/articles/new" dispatch={dispatch} />
    </Router>
  );
};

export default App;
