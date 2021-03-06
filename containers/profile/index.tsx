import {
  Avatar,
  Button,
  FileInput,
  InputWithLabel,
  TextButton,
} from '@components';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { verifyUsername } from '@utils/verifyFunctions';
import { usernameStandard } from '@utils/verifyStandard';
import useDisabled from 'hooks/useDisabled';
import useValidInput from 'hooks/useValidInput';
import { RootState } from 'modules/reducer';
import {
  getInfoThunk,
  updateProfileImageThunk,
  updateUserNameThunk,
} from 'modules/user';
import React, { MouseEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AccountStyle } from '../account/account.style';

const ProfileSettings = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.user.userProfile);
  const { disabled, disabledController } = useDisabled(true);
  const [value, setValue] = useValidInput('', verifyUsername, usernameStandard);
  const [avatarFile, setAvatarFile] = useState<Blob | null>(null);
  const [avatarUrl, setAvatarUrl] = useState<string>(
    '/images/avatar_default.jpg'
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const files = target.files;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onloadend = () => {
        setAvatarUrl(reader.result as string);
        setAvatarFile(files[0]);
      };
    }
  };

  const handleUsernameChange = (e: MouseEvent) => {
    dispatch(updateUserNameThunk(value));
    disabledController(e);
  };

  const handleProfileImageChange = (_e: MouseEvent) => {
    const formdata = new FormData();
    formdata.append('profileImage', avatarFile as Blob);
    dispatch(updateProfileImageThunk(formdata));
    setAvatarFile(null);
  };

  useEffect(() => {
    if (data) {
      setValue(data.name);
      setAvatarUrl(data.profileImage);
    }
  }, [data]);

  useEffect(() => {
    if (!data) dispatch(getInfoThunk());
  }, [data]);

  return (
    <AccountStyle>
      <section className="title">
        <h1>????????? ??????</h1>
        <p className="description">???????????? ???????????? ????????? ??? ?????????</p>
      </section>
      <div className="content">
        <section id="profileImageEdit">
          <h2>????????? ?????????</h2>
          <div className="avatar-edit">
            <Avatar profileImage={avatarUrl} size={10} />
            <div className="avatar-edit-buttons">
              <FileInput
                handleFileChange={handleFileChange}
                inputButton={
                  <span id="formButton">
                    <FontAwesomeIcon icon={faCamera} /> <span>?????? ?????????</span>
                  </span>
                }
              />
              <Button
                disabled={avatarFile ? false : true}
                text="????????? ????????? ????????????"
                handler={handleProfileImageChange}
              />
            </div>
          </div>
        </section>
        <section id="usernameEdit">
          <div className="username-edit-title">
            <h2>?????????</h2>
            {disabled ? (
              <TextButton
                disabled={false}
                text="??????"
                handler={disabledController}
              />
            ) : (
              <div>
                <TextButton
                  disabled={false}
                  text="??????"
                  handler={disabledController}
                />
                <TextButton
                  disabled={false}
                  text="??????"
                  handler={handleUsernameChange}
                />
              </div>
            )}
          </div>
          <div className="username-edit">
            <InputWithLabel
              label=""
              type="text"
              value={value}
              setValue={setValue}
              disabled={disabled}
            />
          </div>
        </section>
      </div>
    </AccountStyle>
  );
};

export default ProfileSettings;
