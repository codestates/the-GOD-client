import styled from '@styles/themed-components';

export const BadgeContainer = styled.span`
  background-color: cyan;
  margin-right: ${({ theme }) => theme.space.xs};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-weight: 500;
  ${({ theme }) => theme.media.desktop} {
    font-size: 18px;
    height: 36px;
    padding: 0 ${({ theme }) => theme.space.xs};
  }
  ${({ theme }) => theme.media.tablet} {
    font-size: 14px;
    height: 28px;
    padding: 0 ${({ theme }) => theme.space.xxs};
  }
  ${({ theme }) => theme.media.mobile} {
    font-size: 12px;
    height: 24px;
    padding: 0 ${({ theme }) => theme.space.xxs};
  }
`;
