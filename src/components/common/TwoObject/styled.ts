import styled from '@emotion/styled';

export const TwoObjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  position: absolute;
  padding-top: 100rem;
`;

export const TwoObjectClickContainer = styled.div`
  margin: auto;
`;

export const TwoObjectTitle = styled.div`
  text-align: center;
  color: white;
  letter-spacing: 1px;
  font-size: 2rem;
  margin: 6rem 0 2rem 0;
  z-index: 99;
`;

export const TwoObject = styled.div`
  position: absolute;
  width: 63.5rem;
  height: 60rem;
  background: url('https://cdn.discordapp.com/attachments/606799838721343527/1047886586378997760/TwoObject.jpg');
  border-radius: 1.5rem;
  object-fit: cover;
`;

export const Click = styled.div<{ answered: boolean }>`
  position: relative;
  width: 3rem;
  padding-top: 3rem;
  background: black;
  border: ${(props) => (props.answered ? '1rem solid red' : 'nTwo')};
  border-radius: 4rem;
  margin-left: 8.3rem;
  margin-top: 26rem;
`;
