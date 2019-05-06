import React from 'react';
import { Container } from 'reactstrap';
import TopMenuList from './TopMenuList';
import Search from './Search';

const TopMenu = () => {
  return (
    <div className="top-menu">
      <Container>
        <TopMenuList />
        <Search />
      </Container>
    </div>
  )
}

export default TopMenu;
