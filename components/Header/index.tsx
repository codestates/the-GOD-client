import Link from 'next/link';
import React, { ReactElement } from 'react';
import { HeaderContainer } from './Header.style';

const Header = ({ logo, gnb }: any): ReactElement => {
  return (
    <HeaderContainer>
      <div className="logo">
        <Link href="/">
          {logo && logo} <h1>FansSum</h1>
        </Link>
      </div>
      <nav className="gnb">{gnb}</nav>
    </HeaderContainer>
  );
};

export default Header;