import React, { useContext } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from '../../constants';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import { user } from 'react-icons-kit/feather/user'
import { bellO } from 'react-icons-kit/fa/bellO'
import { bookmark } from 'react-icons-kit/feather/bookmark'

import { CurrentUserContext } from '../CurrentUserContext';

import Logo from '../Logo';
import Spacer from '../Spacer';


const Sidebar = () => {

  const {currentUser, status} = useContext(CurrentUserContext);
  let handle = '';
  if (currentUser) {
    handle = currentUser.profile.handle
  }

  return (
    <>
      <Wrapper>
        <Logo />
        <Link exact activeClassName="active" to="/"><Icon size={35} icon={home}/><Spacer size={30} />Home</Link>
        <Link activeClassName="active" to={`/${handle}`}><Icon size={35} icon={user}/><Spacer size={30} />Profile</Link>
        <Link activeClassName="active" to="/notifications"><Icon size={35} icon={bellO}/><Spacer size={30} />Notifications</Link>
        <Link activeClassName="active" to="/bookmarks"><Icon size={35} icon={bookmark}/><Spacer size={30} />Bookmarks</Link>
        <Spacer size={25} />
        <MeowButton>Meow</MeowButton>
      </Wrapper>
    </>
  )
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  padding-left: 100px;
  padding-right: 50px;
  border-width: 1px;
`;


const Link = styled(NavLink)`
  display: flex;
  color: black;
  padding: 20px;
  font-weight: bold;
  font-size: 25px;
  text-decoration: none;
  text-align: bottom;
  border-radius: 30px;
  &:hover {
    background-color: ${COLORS.secondary};

  }
  &.active {
      color: ${COLORS.primary};
  }
`;

const MeowButton = styled.button`
  cursor: pointer;
  width: 280px;
  height: 55px;
  font-size: 25px;
  border-radius: 30px;
  font-weight: bold;
  color: white;
  background-color: ${COLORS.primary};
  &:hover {
    background-color: ${COLORS.secondary};

`;



export default Sidebar
