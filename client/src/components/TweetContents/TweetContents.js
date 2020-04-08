import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const TweetContents = ({ tweet }) => {
  const media = tweet.media[0]


  const isMedia = !(media === undefined || media === {}); 

  return (
      <Wrapper>
        {isMedia && <Link to={`/tweet/${tweet.id}`}><Image src = {media.url} /></Link>}
      </Wrapper>
    
  )
}

const Wrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 800px;
  height: 500px;
  border-radius: 30px;
`;

const Link = styled(NavLink)`
  
`;

export default TweetContents
