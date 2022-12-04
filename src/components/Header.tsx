import styled from 'styled-components';
import { flexCenter } from '../styles/utils';
import { fonts, colors } from '../styles/theme';

export default function Header() {
  return <HeaderComponent>POCKEMON</HeaderComponent>;
}

const HeaderComponent = styled.header`
  /* position: fixed; */
  top: 0;
  width: 100%;
  height: 6rem;
  ${fonts.h1};
  color: ${colors.mint};
  background-color: ${colors.darkGreen};
  ${flexCenter};
`;
