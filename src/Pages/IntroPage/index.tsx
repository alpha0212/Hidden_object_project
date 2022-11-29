import React from 'react';
import * as S from './styled';

export const IntroPage: React.FC = () => {
  return (
    <S.IntroContainer>
      <S.IntroBackground>
        <S.MainIntro>어 반가워</S.MainIntro>
        <S.GoToMain>
          <div style={{ paddingTop: '3.5rem' }}>숨은그림찾기 하러 가기</div>
        </S.GoToMain>
      </S.IntroBackground>
    </S.IntroContainer>
  );
};
