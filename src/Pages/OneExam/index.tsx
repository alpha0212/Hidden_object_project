import React, { useState } from 'react';
import * as S from './styled';

//components
import { OneObject } from 'components';

export const OneExam: React.FC = () => {
  const [answered, setAnswered] = useState(false);
  const answerClick = () => {
    setAnswered(true);
    alert('정답입니다');
  };
  return (
    <S.MainContainer>
      <S.OneObjectTitle style={{ color: 'red' }}>
        새로고침을 하면 초기화 되니 유의해주세요!
      </S.OneObjectTitle>
      <S.OneObjectTitle>
        1번. 넥타이를 매고 있는 곰돌이 중에 넥타이를 잃어버린 곰돌이 한마리가
        있어요!
      </S.OneObjectTitle>
      {answered ? (
        <S.NextLevelContainer>
          <S.NextLevel to="/twoexam">다음단계가기</S.NextLevel>
        </S.NextLevelContainer>
      ) : (
        <></>
      )}
      <OneObject answered={answered} answerClick={answerClick} />
    </S.MainContainer>
  );
};
