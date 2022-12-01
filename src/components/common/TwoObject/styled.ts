import styled from '@emotion/styled';

export const TwoObjectContainer = styled.div`
  width: 68%;
  height: 50%;
  display: flex;
  position: absolute;
  padding-bottom: 40rem;
`;

export const TwoObjectClickContainer = styled.div`
  margin: auto;
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
  border: ${(props) => (props.answered ? '0.5rem solid green' : 'none')};
  border-radius: 4rem;
  margin-left: 8.3rem;
  margin-top: 26rem;
`;
