import React, { useState } from 'react';
import * as S from './styled';

export const TwoObject: React.FC = () => {
  const [answered, setAnswered] = useState(false);
  const answerClick = () => {
    setAnswered(true);
    alert('정답입니다');
  };
  return (
    <S.TwoObjectContainer>
      <S.TwoObjectTitle>
        2번. 버섯 사이에 쥐가 살고 있어요! 잡아주세요!
      </S.TwoObjectTitle>
      <S.TwoObjectClickContainer>
        <S.TwoObject />
        <S.Click answered={answered} onClick={answerClick} />
      </S.TwoObjectClickContainer>
    </S.TwoObjectContainer>
  );
};
