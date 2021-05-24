import { Button } from '@components';
import { SignoutModal } from 'containers/auth';
import useModal from 'hooks/useModal';
import React from 'react';
import { EditPassword } from './EditUserInfo';
import { AccountStyle } from './account.style';

const AccountSettings = () => {
  const { isOpen, modalController } = useModal();

  return (
    <AccountStyle>
      <section>
        <h1>계정 설정</h1>
        <p>여기에서 계정 설정을 할 수 있어요 블라블라</p>
      </section>
      <section>
        <h2>기본 정보</h2>
        <EditPassword field="비밀번호" />
      </section>
      <section id="accountDelete">
        <h2>계정 관리</h2>
        <div>
          <div>
            <h4>계정 삭제</h4>
            <p>계정 및 계정 데이터 삭제</p>
          </div>
          <Button disabled={false} text="계정 삭제" handler={modalController} />
        </div>
        <SignoutModal isOpen={isOpen} handler={modalController} />
      </section>
    </AccountStyle>
  );
};

export default AccountSettings;