import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MainContainer = styled.div``;

export const NextLevelContainer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 7rem;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

export const NextLevel = styled(Link)`
  color: #ffd58a;
  text-decoration: none;
`;

export const OneObjectTitle = styled.div`
  width: 100%;
  text-align: center;
  color: white;
  letter-spacing: 1px;
  font-size: 2rem;
  margin: 6rem 0 2rem 0;
  z-index: 99;
`;
