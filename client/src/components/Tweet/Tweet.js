import React from 'react'
import styled from 'styled-components';
import Spacer from '../Spacer';
import { format } from 'date-fns'
import { NavLink } from 'react-router-dom';
import TweetContents from '../TweetContents';
import { COLORS } from '../../constants';
import TweetAction from '../TweetAction';

const Tweet = ({ tweet }) => {
  
  return (
    <Wrapper>
      
      <Header>
        <Link to={`/${tweet.author.handle}`}><Avatar src={tweet.author.avatarSrc} /></Link>
        <Name>
          <DisplayName>{tweet.author.displayName}</DisplayName>
          <Spacer size={5}/>
          <Handle>@{tweet.author.handle}</Handle>
          <Spacer size={5}/>
          <Timestamp>{format(Date.parse(tweet.timestamp), 'MMM do')}</Timestamp>
        </Name>
      </Header>
      <Spacer size={10}/>
      <Status>{tweet.status}</Status>
      <Spacer size={10}/>
      <TweetContents tweet={tweet} />
      <Spacer size={10}/>
      <Divider />
        <TweetAction 
          tweet={tweet}
          id={tweet.id}
        />
      <Divider />

    </Wrapper>
  )
}

const Wrapper = styled.div`
background: white;
width: 900px;
border: solid #E0E0E0;
border-width: 1px;
padding: 16px;
text-align: left;
/* padding-bottom: 0; */
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
  Ubuntu, 'Helvetica Neue', sans-serif;
`;

const Header = styled.div`
  display: flex;
`;

const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

const Name = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  padding: 0px 16px;
`;

const Status = styled.div`
  display: flex;
`;

const DisplayName = styled.div`
  font-size: 15px;
  line-height: 20px;
  font-weight: bold;
`;

const Handle = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
`;

const Timestamp = styled.div`
  font-size: 15px;
  line-height: 20px;
  color: rgb(101, 119, 134);
`;

const Divider = styled.div`
  height: 1px;
  background: rgb(230, 236, 240);
`;

const Link = styled(NavLink)`
  
`;

export default Tweet
