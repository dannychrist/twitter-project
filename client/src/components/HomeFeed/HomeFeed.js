import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Tweet from '../Tweet';
import PostTweet from '../PostTweet';
import { COLORS } from '../../constants';

const HomeFeed = () => {

  const [feed, setFeed] = useState({})
  const [tweetedIds, setTweetedIds] = useState([])

  useEffect(() => {
  fetch('/api/me/home-feed')
  .then(res => res.json())
  .then(data => {
    // console.log(data)
    setFeed(data.tweetsById);
    setTweetedIds(data.tweetIds);
  })
  }, [])
  
  
  return (
    <>
      <Wrapper>
        <Header />
        <PostTweet 
          feed={feed}
          setFeed={setFeed}
          tweetedIds={tweetedIds}
          setTweetedIds={setTweetedIds}
        />
        <Tweets>
          {
            tweetedIds.map((tweetId) => (
              <Tweet
                key={tweetId}
                tweet={feed[tweetId]}
              />
            ))
          }
        </Tweets>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`

`;

const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  align-items; center;
`;

const Header = styled.div`

`;


export default HomeFeed
