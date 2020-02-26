import React from 'react';
import './App.css';
import Layout from './shared/components/hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import LineGraphContainer from './containers/LineGraphContainer/LineGraphContainer';
import PostsContainer from './containers/PostsContainer/PostsContainer';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/posts" component={PostsContainer}></Route>
          <Route path="/" exact component={LineGraphContainer}></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
