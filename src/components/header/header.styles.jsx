import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 35px;
    flex-direction: column;
    align-items: center;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 15px;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 100%;
    justify-content: space-around;
    margin-top: 15px;
    border: 1.3px solid black;
    border-radius: 4px;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-size: 20px;
  @media screen and (max-width: 800px) {
    font-size: 15px;
    font-weight: bold;
  }
`;
