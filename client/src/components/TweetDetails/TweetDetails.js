import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Spacer from '../Spacer';
import { format } from 'date-fns'
import { NavLink } from 'react-router-dom';
import TweetContents from '../TweetContents';
import { COLORS } from '../../constants';
import { Icon } from 'react-icons-kit';
import {messageCircle} from 'react-icons-kit/feather/messageCircle';
import {repeat} from 'react-icons-kit/feather/repeat';
import {heart} from 'react-icons-kit/feather/heart';
import {share} from 'react-icons-kit/feather/share';
import CircularProgress from '@material-ui/core/CircularProgress';
import TweetAction from '../TweetAction';


const TweetDetails = () => {
  const [bigTweet, setBigTweet] = useState(null)
  const { tweetId } = useParams();
  console.log(tweetId)

  useEffect(() => {
    fetch(`/api/tweet/${tweetId}`)
    .then((res) => res.json())
    .then((data) => {
    setBigTweet(data.tweet);
    });
    }, [tweetId]);
    console.log('hihihi')
    console.log(bigTweet)

    if (bigTweet === null) {
      return (
        <CircularProgress />

      )
    }
  return (
    <Wrapper>
      
      <Header>
        <Avatar src={bigTweet.author.avatarSrc} />
        <Name>
          <DisplayName>{bigTweet.displayName}</DisplayName>
          <Spacer size={5}/>
          <Handle>@{bigTweet.handle}</Handle>
          <Spacer size={5}/>
          <Timestamp>{}</Timestamp>
        </Name>
      </Header>
      <Spacer size={10}/>
      <Status>{bigTweet.status}</Status>
      <Spacer size={10}/>
      <TweetContents tweet={bigTweet} />
      <Spacer size={10}/>
      <Divider />
        <Action>

          <IconWrapper>
            <Icon size={20} icon={messageCircle}/>
          </IconWrapper>

          <IconWrapper>
            <Icon size={20} icon={repeat}/><Spacer size={10}/><NumberOfRetweets>{bigTweet.numRetweets}</NumberOfRetweets>
          </IconWrapper>

          <IconWrapper>
            <Icon size={20} icon={heart}/><Spacer size={10}/><NumberOfLikes>{bigTweet.numLikes}</NumberOfLikes>
          </IconWrapper>

          <IconWrapper>
            <Icon size={20} icon={share}/>
          </IconWrapper>

        </Action>
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

const Action = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
`;

const NumberOfLikes = styled.div`

`;

const NumberOfRetweets = styled.div`

`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export default TweetDetails
