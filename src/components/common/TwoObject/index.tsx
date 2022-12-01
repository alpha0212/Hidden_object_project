import React from 'react';
import * as S from './styled';

export interface TwoObjectType {
  answered: boolean;
  answerClick: any;
}

export const TwoObject: React.FC<TwoObjectType> = ({
  answered,
  answerClick,
}) => {
  return (
    <S.TwoObjectContainer>
      <S.TwoObjectClickContainer>
        <S.TwoObject />
        <S.Click answered={answered} onClick={answerClick} />
      </S.TwoObjectClickContainer>
    </S.TwoObjectContainer>
  );
};
