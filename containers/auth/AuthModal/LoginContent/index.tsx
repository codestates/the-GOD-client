import {
  Button,
  EmailInput,
  GoogleLoginButton,
  Horizon,
  KakaoLoginButton,
  PasswordInput,
  TwitterLoginButton,
} from '@components';
import { verifyEmail, verifyPassword } from '@utils/verifyFunctions';
import { emailStandard, passwordStandard } from '@utils/verifyStandard';
import useValidInput from 'hooks/useValidInput';
import { AuthContentProps } from 'interfaces/props';
import { useEffect, useState } from 'react';
import { FormSection, LinkSection, OAuthSection } from '../authcontent.style';

// FIXME: 진짜 로직에 필요한 값으로 대체되어야 합니다
const fakeLoginHandler = () => console.log('fake login');
const fakeGoogleClientId =
  '588359564391-l3hs73u3j53jtos0rmfhqldb5ijgmsfc.apps.googleusercontent.com';

const LoginContent = ({
  handleChangeContent,
  submitHandler,
}: AuthContentProps) => {
  const [email, setEmail, emailError] = useValidInput(
    '',
    verifyEmail,
    emailStandard
  );

  const [password, setPassword, passwordError] = useValidInput(
    '',
    verifyPassword,
    passwordStandard
  );

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (email && password) {
      if (!emailError && !passwordError) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    }
  }, [emailError, passwordError]);

  return (
    <article>
      <OAuthSection>
        <TwitterLoginButton onClick={fakeLoginHandler} />
        <GoogleLoginButton
          clientId={fakeGoogleClientId}
          onSubmit={fakeLoginHandler}
        />
        <KakaoLoginButton onClick={fakeLoginHandler} />
      </OAuthSection>
      <Horizon text="or" />
      <FormSection>
        <EmailInput value={email} setValue={setEmail} error={emailError} />
        <PasswordInput
          value={password}
          setValue={setPassword}
          error={passwordError}
        />
        <Button disabled={disabled} text="signin" handler={submitHandler} />
      </FormSection>
      <LinkSection>
        <span>Already a member?</span>
        <span className="auth-link" onClick={handleChangeContent}>
          회원가입하러가기
        </span>
      </LinkSection>
    </article>
  );
};

export default LoginContent;