import React from 'react';
import * as S from './styled';

export interface OneObjectType {
  answered: boolean;
  answerClick: any;
}

export const OneObject: React.FC<OneObjectType> = ({
  answered,
  answerClick,
}) => {
  return (
    <S.OneObjectContainer>
      <S.OneObjectClickContainer>
        <S.OneObject />
        <S.Click answered={answered} onClick={answerClick} />
      </S.OneObjectClickContainer>
    </S.OneObjectContainer>
  );
};
