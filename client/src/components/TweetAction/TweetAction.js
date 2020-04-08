import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Icon } from 'react-icons-kit';
import {messageCircle} from 'react-icons-kit/feather/messageCircle';
import {repeat} from 'react-icons-kit/feather/repeat';
import {heart} from 'react-icons-kit/feather/heart';
import {share} from 'react-icons-kit/feather/share';
import Spacer from '../Spacer';

const TweetAction = ({ tweet, id }) => {
  console.log(tweet)
  
  const [isLiked, setIsLiked] = useState(false);
  const [numLikes, setNumLikes] = useState(0);

  const [isRetweeted, setIsRetweeted] = useState(false);
  const [numTweets, setNumTweets] = useState(0);
  
  
  const handleLike = () => {
  if (!isLiked) setNumLikes((numLikes) => numLikes + 1);
    else setNumLikes((numLikes) => numLikes - 1);
    setIsLiked(!isLiked);
    fetch(`/api/tweet/${id}/like`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        body: JSON.stringify({ like: !isLiked }),
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  const handleRetweet = () => {
    if (!isRetweeted) setNumTweets((numTweets) => numTweets + 1);
      else setNumTweets((numTweets) => numTweets - 1);
      setIsRetweeted(!isRetweeted);
      fetch(`/api/tweet/${id}/retweet`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          body: JSON.stringify({ retweet: !isRetweeted }),
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  

  return (
    <Wrapper>

      <Button>
      <Icon size={20} icon={messageCircle}/>
      </Button>

      <Button onClick={handleRetweet}>
        <Icon size={20} icon={repeat}/><Spacer size={15}/><NumberOfRetweets>{numTweets}</NumberOfRetweets>
      </Button>

      <Button onClick={handleLike}>
      <Icon size={20} icon={heart}/><Spacer size={15}/><NumberOfLikes>{numLikes}</NumberOfLikes>
      </Button>

      <Button>
      <Icon size={20} icon={share}/>
      </Button>

    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
`;

const Button = styled.button`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  border-radius: 50%;
  border: none;
`;

const NumberOfLikes = styled.div`
  
`;

const NumberOfRetweets = styled.div`
  
`;

export default TweetAction
