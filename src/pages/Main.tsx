import React, { useState } from 'react';
import styled from 'styled-components';
import Search from 'components/Main/Search';
import Layout from 'components/Layout';
import PokemonCard from 'components/Main/PokemonCard';
import PokemonBall from 'assets/PokemonBall2.png';

export default function Main() {
  const [input, setInput] = useState<string>('');
  const [id, setId] = useState<string>('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(() => e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setId(() => input);
  };

  return (
    <Layout>
      <Contents>
        <Search input={input} onChange={onChange} onSubmit={onSubmit} />
        <PokemonCard id={id} />
      </Contents>
      <Selector>
        <MyBall src={PokemonBall} />
      </Selector>
    </Layout>
  );
}

const Contents = styled.main`
  width: 27rem;
  height: 100%;
  margin: 0 auto;
  margin-top: 3rem;
`;

const Selector = styled.button`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  background-color: transparent;
  border: none;
`;

const MyBall = styled.img`
  cursor: pointer;
`;
