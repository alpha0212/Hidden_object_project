import React from 'react';
import * as S from './styled';

export const IntroPage: React.FC = () => {
  return (
    <S.IntroContainer>
      <S.IntroBackground>
        <S.MainIntro>숨은그림찾기</S.MainIntro>
        <S.GoToMain>
          <S.rainbow to="/oneexam">게임하러 가기</S.rainbow>
        </S.GoToMain>
      </S.IntroBackground>
    </S.IntroContainer>
  );
};
