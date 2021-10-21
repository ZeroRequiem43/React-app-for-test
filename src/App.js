import React from 'react'
import { Route } from 'react-router'
import MainPageContainer from './components/MainPageContainer'
import Profile from './components/Profile.jsx'


const App = () => {
  return (
    <div className="App">
      <div className="app__body">
        <Route exact path="/" component={MainPageContainer} />
        <Route path="/profile" render={(props) => <Profile {...props} />} />
      </div>
    </div>
  );
}

export default App;
