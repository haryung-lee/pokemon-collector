import { ReactNode } from 'react';
import styled from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { flexCenter } from 'styles/utils';
import { fonts, colors } from 'styles/theme';

type Props = {
  children: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Toaster />
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
