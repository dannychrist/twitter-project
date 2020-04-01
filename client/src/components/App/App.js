import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import HomeFeed from '../HomeFeed';
import Notifications from '../Notifications';
import Bookmarks from '../Bookmarks';
import TweetDetails from '../TweetDetails';
import Profile from '../Profile';
import GlobalStyles from '../GlobalStyles';
import Sidebar from '../Sidebar';



const App = () => {
  return (
    <>
      
      <BrowserRouter>
        <Wrapper>
        <Sidebar />
        
          <Switch>
            <Route exact path="/">
              <HomeFeed />
            </Route>
            <Route path="/notifications">
              <Notifications />
            </Route>
            <Route path="/bookmarks">
              <Bookmarks />
            </Route>
            <Route path="/tweet/:tweetId">
              <TweetDetails />
            </Route>
            <Route path="/:profileId">
              <Profile />
            </Route>
          </Switch>
          </Wrapper>
      
      <GlobalStyles />
      </BrowserRouter>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  
`;





export default App;
