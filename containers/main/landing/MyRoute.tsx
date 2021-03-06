import React from 'react';
import useScrollFadeIn from 'hooks/useScrollFadeIn';
import {
  Wrapper,
  Image,
  TextWrapper,
  Label,
  Title,
  Description,
  ImageWrapper,
} from './landing.style';

const MyRouteLanding = () => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0, 1.0),
    1: useScrollFadeIn('up', 1, 0.2, 1.0),
    2: useScrollFadeIn('up', 1, 0.3, 0.9),
    3: useScrollFadeIn('up', 1, 0.4, 0.9),
    4: useScrollFadeIn('up', 1, 0.5, 0.9),
    5: useScrollFadeIn('up', 1, 0.6, 0.9),
    6: useScrollFadeIn('up', 1, 0.7, 0.8),
    7: useScrollFadeIn('up', 1, 0.8, 0.9),
    8: useScrollFadeIn('up', 1, 1.0, 0.9),
  };

  return (
    <Wrapper>
      <ImageWrapper className="landing-images left">
        <Image
          url="/images/landing_myroute003.svg"
          size={24}
          width={13}
          bottom={'20%'}
          right={'0%'}
          zIndex={3}
          {...animatedItem[1]}
        />
        <Image
          url="/images/landing_myroute004.svg"
          size={30}
          height={28}
          bottom={'20%'}
          left={'0%'}
          zIndex={4}
          {...animatedItem[2]}
        />
        <Image
          url="/images/landing_myroute006.svg"
          size={25}
          width={17}
          top={'17%'}
          right={'10%'}
          zIndex={5}
          {...animatedItem[5]}
        />
        <Image
          url="/images/landing_myroute007.svg"
          size={20}
          width={15}
          bottom={'10%'}
          left={'10%'}
          zIndex={5}
          {...animatedItem[6]}
        />
        <Image
          url="/images/landing_myroute008.svg"
          size={14}
          top={'0%'}
          right={'0%'}
          zIndex={5}
          {...animatedItem[8]}
        />
      </ImageWrapper>
      <TextWrapper>
        <Label {...animatedItem[3]}>FansSum Route</Label>
        <Title {...animatedItem[4]}>
          컵홀더 투어를 계획하시나요?
          <br />
          FansSum에서
          <br />
          나만의 루트를 만들어보세요!
        </Title>
        <Description {...animatedItem[7]}>
          검색결과 페이지에서 마이루트 버튼을 클릭해 보세요!
          <br />
          [팬썸 루트 모드] ON!! 이제 자유롭게 루트를 만들고 저장해보세요.
          <br />
          저장한 마이루트는 마이페이지에서 언제든지 확인할 수 있어요.
        </Description>
      </TextWrapper>
    </Wrapper>
  );
};

export default MyRouteLanding;
