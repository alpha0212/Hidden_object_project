import styled from '@emotion/styled';

export const OneObjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 30rem;
  position: absolute;
`;

export const OneObjectClickContainer = styled.div`
  margin: auto;
`;

export const OneObject = styled.div`
  position: absolute;
  width: 72rem;
  height: 72rem;
  margin: auto;
  background: url('https://cdn.discordapp.com/attachments/606799838721343527/1047161422427201596/OneObject.jpg');
  border-radius: 1.5rem;
  object-fit: cover;
`;

export const Click = styled.div<{ answered: boolean }>`
  position: relative;
  width: 6rem;
  padding-top: 6rem;
  margin-left: 62.5rem;
  margin-top: 58rem;
  border: ${(props) => (props.answered ? '1rem solid red' : 'none')};
  border-radius: 4rem;
`;
