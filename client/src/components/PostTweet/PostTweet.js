import React, { useState } from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';
import { COLORS } from '../../constants';
import Spacer from '../Spacer';

const PostTweet = ({ setFeed, setTweetedIds }) => {
  const [tweetText, setTweetText] = useState('');
  const [countNumber, setCountNumber] = useState(280);
  const [disable, setDisable] = useState(true);

  const handleChange = (e) => {
    console.log('HIHIHIHIHIH')
    setCountNumber(280 - e.currentTarget.value.length)
    if (countNumber <= 0 || countNumber === 280) {
    setDisable(true) 
    } else {
      setDisable(false)
    }
    setTweetText(e.currentTarget.value)
    
  }

  return (
    <Wrapper>
    <form 
      onSubmit={event => {
        event.preventDefault();

        fetch('/api/tweet', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            status: tweetText
          }),
        })
          .then(res => {
            console.log(res)
          return res.json()
          })
          .then(res => {
            console.log(res)
            setTweetText('')
          })
          .then(fetch('/api/me/home-feed')
          .then(res => res.json())
          .then(data => {
            // console.log(data)
            setFeed(data.tweetsById);
            setTweetedIds(data.tweetIds);
          }))
          .then(setCountNumber(280))
          .then(setDisable(true))
          
          
      }}>
        <Textarea
          type="text"
          value={tweetText}
          maxLength="280"
          onChange={handleChange}
          placeholder="What's on your mind?"
          />
        <SubmitWrapper>
          <CountNumber>{countNumber}</CountNumber>
            <Spacer size={15} />
            <Button type="submit" value="Meow" disabled={disable}>
                  Meow
            </Button>
        </SubmitWrapper>
        </form>

        
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 900px;
`;

const Textarea = styled.textarea`
  background: white;
  padding: 2vw;
  margin-top: 20px;
  height: 250px;;
  color: #293241;
  width: 900px;
  border: solid #E0E0E0;
  border-width: 1px;
  border-bottom-style: none;
  resize: none;
  outline: none;
  font-size: 30px;
`;

const SubmitWrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 20px;
  border: solid #E0E0E0;
  border-width: 1px;
  border-top-style: none;
`;

const Button = styled.button`
  cursor: pointer;
  width: 100px;
  height: 40px;
  font-size: 25px;
  border-radius: 30px;
  font-weight: bold;
  color: white;
  background-color: ${COLORS.primary};
  &:hover {
    background-color: ${COLORS.secondary};
`;

const CountNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
`;


export default PostTweet
