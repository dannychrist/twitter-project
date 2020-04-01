import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { COLORS } from '../../constants';
import Logo from '../Logo';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/icomoon/home'
import { user } from 'react-icons-kit/feather/user'
import { bellO } from 'react-icons-kit/fa/bellO'
import { bookmark } from 'react-icons-kit/feather/bookmark'


const Sidebar = () => {
  return (
    <>
      <Wrapper>
        <Logo size={32}/>
        <Link exact activeClassName="active" to="/"><Icon size={32} icon={home}/>Home</Link>
        <Link activeClassName="active" to="/:profileId"><Icon size={32} icon={user}/>Profile</Link>
        <Link activeClassName="active" to="/notifications"><Icon size={32} icon={bellO}/>Notifications</Link>
        <Link activeClassName="active" to="/bookmarks"><Icon size={32} icon={bookmark}/>Bookmarks</Link>
      </Wrapper>
    </>
  )
}


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  padding-top: 20px;
  padding-left: 120px;
`;


const Link = styled(NavLink)`
  color: black;
  padding-top: 40px;
  padding-bottom: 20px;
  font-weight: bold;

  &.active {
      color: ${COLORS.primary};
  }
`;

export default Sidebar
