import React, { useState } from 'react';
import * as S from './styled';

//components
import { TwoObject } from 'components';

export const TwoExam: React.FC = () => {
  const [answered, setAnswered] = useState(false);
  const answerClick = () => {
    setAnswered(true);
    alert('정답입니다');
  };
  return (
    <S.MainContainer>
      <S.TwoObjectTitle>
        2번. 버섯 사이에 쥐 한마리가 살고 있어요! 잡아주세요!
      </S.TwoObjectTitle>
      {answered ? (
        <div
          style={{ textAlign: 'center', color: '#ffa1a1', fontSize: '2rem' }}
        >
          모든 문제가 끝났습니다.
        </div>
      ) : (
        <></>
      )}
      <TwoObject answered={answered} answerClick={answerClick} />
    </S.MainContainer>
  );
};
