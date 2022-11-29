import styled from '@emotion/styled';

export const IntroContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  background: rgba(64, 65, 109);
`;

export const IntroBackground = styled.div`
  width: 1265px;
  height: 705px;
  margin: auto;
  background-image: url('https://cdn.discordapp.com/attachments/606799838721343527/1047169390950490222/image.png');
`;

export const MainIntro = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  font-family: 'ONE-Mobile-POP';
  color: white;
  margin-top: 25rem;
  animation: MainIntro 3s infinite;
  @keyframes MainIntro {
    50% {
      font-size: 4rem;
    }
  }

  @font-face {
    font-family: 'ONE-Mobile-POP';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;

export const GoToMain = styled.div`
  width: 30rem;
  height: 10rem;
  text-align: center;
  font-family: 'ONE-Mobile-POP';
  color: white;
  margin: auto;
  margin-top: 6rem;
  @font-face {
    font-family: 'ONE-Mobile-POP';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2105_2@1.0/ONE-Mobile-POP.woff')
      format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
