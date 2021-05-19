import styled from 'styled-components';

export default styled.div<{ value: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(233, 233, 233, 0.2);
  input {
    display: none;
  }
  .toggle-box {
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: ${({ theme }) => theme.space.md};
    box-shadow: 0 7px 7px 0 rgba(0, 0, 0, 0.3);
    &:active {
      box-shadow: 0 7px 7px 0 rgba(0, 0, 0, 0.3) inset;
    }
    .toggle-icon {
      text-align: center;
      font-size: 30px;
      padding: ${({ theme }) => theme.space.xs};
    }
  }
  color: ${(props) => (props.value ? 'red' : 'blue')};
`;