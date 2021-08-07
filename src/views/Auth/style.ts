import styled from 'styled-components';

export const SWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  background: #fff;

  &:before {
    content: '';
    position: absolute;
    width: 40%;
    height: 100%;
    background: linear-gradient(
      180deg,
      #1e2032 0%,
      #3a4775 28.65%,
      #5685fe 50.52%,
      #6bdbfe 71.87%,
      #2b27ff 100%
    );
  }
`;
