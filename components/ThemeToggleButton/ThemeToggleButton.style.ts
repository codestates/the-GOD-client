import styled from '@styles/themed-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 100px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.label`
  position: relative;
  display: block;
  width: 60px;
  height: 30px;
  border-radius: 100px;
  background-color: #000839;
  overflow: hidden;
  cursor: pointer;
  &:before,
  &:after {
    display: block;
    position: absolute;
    content: '';
    width: 22px;
    height: 22px;
    border-radius: 50%;
    top: 4.2px;
    left: 4.1px;
    transition: 0.5s ease;
  }
  &:before {
    background-color: #ffa41b;
  }

  &:after {
    background-color: #000839;
    left: -38px;
    transform: scale(0.00001);
  }
`;

export const Checkbox = styled.input`
  display: none;
  &:checked + label {
    &:before {
      background-color: #fff;
      transform: translateX(30px);
    }

    &:after {
      transform: translateX(60px) scale(1);
    }
  }
`;