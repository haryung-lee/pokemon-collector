import { ReactNode } from 'react';
import styled from 'styled-components';
import { flexCenter } from 'styles/utils';
import { fonts, colors } from 'styles/theme';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Header>POCKEMON</Header>
      {children}
    </>
  );
}

const Header = styled.header`
  top: 0;
  width: 100%;
  height: 6rem;
  ${fonts.h1};
  color: ${colors.mint};
  background-color: ${colors.darkGreen};
  ${flexCenter};
`;
