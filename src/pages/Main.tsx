import React, { useState } from 'react';
import styled from 'styled-components';
import { flexCenter } from 'styles/utils';
import Search from 'components/Main/Search';
import Layout from 'components/Layout';
import PokemonCard from 'components/Main/PokemonCard';

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
    </Layout>
  );
}

const Contents = styled.main`
  width: 100%;
  height: 100%;
  ${flexCenter};
  flex-direction: column;
  gap: 2rem;
  margin-top: 3rem;
`;
