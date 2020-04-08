import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import HomeFeed from '../HomeFeed';
import Notifications from '../Notifications';
import Bookmarks from '../Bookmarks';
import TweetDetails from '../TweetDetails';
import Profile from '../Profile';
import GlobalStyles from '../GlobalStyles';
import Sidebar from '../Sidebar';

import { CurrentUserContext } from '../CurrentUserContext';

const App = () => {
  const {currentUser, status} = useContext(CurrentUserContext);
  if (status === 'loading') {
    return <CircularProgress />;
  }
  return (
    <>
      <BrowserRouter>
      <GlobalStyles />
        <MainWrapper>
          <LeftWrapper>
            <Sidebar />
          </LeftWrapper>


          <RightWrapper>
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
            </RightWrapper>

        </MainWrapper>

      </BrowserRouter>
    </>
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

const RightWrapper = styled.div`
  width: 70%;
`;

const LeftWrapper = styled.div`
  width: 30%;
`;



export default App;
