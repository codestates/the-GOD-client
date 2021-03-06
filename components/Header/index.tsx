import { Button, ThemeToggleButton, SearchTrigger, Modal } from '@components';
import { AuthModal, MainSearchForm } from '@containers';
import {
  AccountOptionsButton,
  AccountOptionsFlyout,
} from 'components/AccountOptions';
import useFlyout from 'hooks/useFlyout';
import useModal from 'hooks/useModal';
import { RootState } from 'modules/reducer';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement, ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { HeaderContainer, SearchField } from './Header.style';

interface HeaderProps {
  logo?: ReactNode;
  avatar: ReactNode;
}
const Header = ({ logo, avatar }: HeaderProps): ReactElement => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const { data: loginData } = useSelector(({ auth }: RootState) => auth.login);
  const { isOpen, flyoutController } = useFlyout(false);
  const { isOpen: isAuthModalOpen, modalController, setIsOpen } = useModal();
  const { isOpen: isExpanded, modalController: searchFieldHandler } =
    useModal();

  const { data } = useSelector((state: RootState) => state.user.userProfile);

  useEffect(() => {
    if (window) {
      const accessToken = window.localStorage.getItem('accessToken');
      if (accessToken) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    }
  }, [data]);
  useEffect(() => {
    if (loginData) setIsLogin(true);
  }, [loginData]);
  useEffect(() => {
    if (document) {
      document.addEventListener('scroll', () => searchFieldHandler(undefined));
      const modalOverlay = document.querySelector('.modal-overlay');
      if (modalOverlay) {
        modalOverlay.addEventListener('onwheel', () => console.log('wheel'));
      }
    }
  });

  const revealSearchTrigger = (): boolean => {
    const path = router.pathname;
    const hide = ['/content/[id]', '/content/form'];
    if (hide.find((el) => el === path)) {
      return false;
    }
    return true;
  };

  return (
    <>
      <HeaderContainer id="headerContainer">
        <div className="logo">
          <Link href="/">
            <a>
              <div className="logo-icon">{logo && logo}</div>
              <h3 className="logo-text">FansSum</h3>
            </a>
          </Link>
        </div>
        {!isExpanded && revealSearchTrigger() && (
          <SearchTrigger handler={searchFieldHandler} />
        )}
        <nav className="gnb">
          <ThemeToggleButton />
          {isLogin ? (
            <>
              {avatar}
              <AccountOptionsButton handler={flyoutController} />
              {isOpen && <AccountOptionsFlyout handler={flyoutController} />}
            </>
          ) : (
            <div className="auth-modal-trigger">
              <Button
                disabled={false}
                text="?????????"
                handler={modalController}
              />
              <AuthModal
                isOpen={isAuthModalOpen}
                handler={modalController}
                setIsOpen={setIsOpen}
              />
            </div>
          )}
        </nav>
      </HeaderContainer>
      <SearchField>
        <Modal
          isOpen={isExpanded}
          component={<MainSearchForm handler={searchFieldHandler} />}
          handler={searchFieldHandler}
        />
      </SearchField>
    </>
  );
};

export default Header;
