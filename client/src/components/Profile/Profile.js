import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from 'styled-components';
import Spacer from '../Spacer';
import { COLORS } from '../../constants';




const Profile = () => {
  const [userProfile, setUserProfile] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  
  const { profileId } = useParams();
  
  useEffect(() => {
    fetch(`/api/${profileId}/profile`)
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      setUserProfile(data)
      setIsLoading(true)
    })
  }, [profileId])

  if (!isLoading) {
    return <CircularProgress />;
  }
  return (
        <Wrapper>
          <WrapperTwo>
            <Banner src={userProfile.profile.bannerSrc} />
            <Avatar src={userProfile.profile.avatarSrc} />
          </WrapperTwo>
          <Spacer size={150} />

          <WrapperThree>
            <FollowButton>Following</FollowButton>
          </WrapperThree>
          <Spacer size={50} />
  
          <Header>
            
            <DisplayName>{userProfile.profile.displayName}</DisplayName>
            <Handle>{userProfile.profile.handle}</Handle>
            <Followed>{userProfile.profile.isFollowingYou}</Followed>
            <Friends>Best friends with @</Friends>

            <Location>{userProfile.profile.location}</Location>

            <Following>{userProfile.profile.numFollowing}Following</Following>
            <Followers>{userProfile.profile.numFollowers}Followers</Followers>

          </Header>
          
        </Wrapper>
      )
  }



const Wrapper = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  border: solid #E0E0E0;
  border-width: 1px;
  width: 900px;
`;

const WrapperTwo = styled.div`
  
`;

const WrapperThree = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-right: 30px;
  margin-top:5px;
`;

const Banner = styled.img`
  position: absolute;
  width: 898px;;
`;

const Avatar = styled.img`
  position: relative;
  border-radius: 50%;
  border: solid white 5px;
  z-index: 1;
  width: 180px;
  height: 180px;
  left: 60px;
  top: 210px;
`;

const FollowButton = styled.button`
  cursor: pointer;
  width: 150px;
  height: 50px;
  font-size: 20px;
  border-radius: 30px;
  font-weight: bold;
  color: white;
  background-color: ${COLORS.primary};
`;

const Header = styled.div`
  width: 100%;
`;

const DisplayName = styled.div`
  
`;

const Handle = styled.div`
  
`;

const Followed = styled.div`
  
`;

const Friends = styled.div`

`;

const Location = styled.div`

`;

const Following = styled.div`

`;

const Followers = styled.div`
  
`;

export default Profile
