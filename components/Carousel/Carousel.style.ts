import styled, { css } from 'styled-components';

export default styled.div<{
  index: number;
  col: number;
  navPosition: number;
}>`
  position: relative;
  width: 100%;
  .carousel-main-cotainer {
    overflow: hidden;
    width: 100%;
  }
  .carousel-content-container {
    z-index: 998;
    width: 100%;
    display: flex;
    & > div {
      flex-shrink: 0;
      ${(props) => {
        const width = 100 / props.col;
        return css`
          ${({ theme }) => theme.media.desktop} {
            width: calc(${width}% - 2 * ${({ theme }) => theme.space.sm});
            margin: 0 ${({ theme }) => theme.space.sm};
          }
          ${({ theme }) => theme.media.tablet} {
            width: calc(${width}% - 2 * ${({ theme }) => theme.space.xs});
            margin: 0 ${({ theme }) => theme.space.xs};
          }
          ${({ theme }) => theme.media.mobile} {
            width: calc(${width}% - 2 * ${({ theme }) => theme.space.xxs});
            margin: 0 ${({ theme }) => theme.space.xxs};
          }
        `;
      }}
      height: 240px;
      display: flex;
      justify-content: center;
      item-align: center;
      background-color: ${({ theme }) => theme.colors.secondary};
    }
  }
  .arrow-box {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: ${(props) => `${props.navPosition / 2 - 15}px`};
    button {
      border-radius: 50%;
      box-shadow: 0 0 22px 4px rgb(122 122 122 / 60%);
      width: 30px;
      z-index: 999;
      background-color: white;
      height: 30px;
      font-size: 24px;
      &.left {
        margin-left: -10px;
        transition: margin-left 0.5s;
        &:hover {
          margin-left: -15px;
        }
      }
      &.right {
        margin-right: -10px;
        transition: margin-right 0.5s;
        &:hover {
          margin-right: -15px;
        }
      }
    }
  }
  .pagenation {
    display: flex;
    justify-content: center;
    margin-top: ${({ theme }) => theme.space.xs};
    & > div {
      font-size: 24px;
      padding: 0 5px;
      opacity: 0.3;
      &:hover {
        opacity: 0.7;
      }
      &:active {
        opaciy: 1;
      }
    }
  }
`;
