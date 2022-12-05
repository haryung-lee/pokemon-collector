import React, { useState } from 'react';
import styled from 'styled-components';
import toast from 'react-hot-toast';
import Search from 'components/Main/Search';
import Layout from 'components/Layout';
import PokemonCard from 'components/Main/PokemonCard';
import PokemonBall from 'assets/PokemonBall2.png';
import PokemonLogo from 'assets/PokemonLogo.png';
import { POKEMON } from 'constants/pokemon';

export default function Main() {
  const [input, setInput] = useState<string>('');
  const [id, setId] = useState<string>('');
  const [openSelector, setOpenSelector] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(() => e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setId(() => input);
  };

  const onClickPokemon = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    // POKEMON에서 id만 추출
    const pokemon = Object.entries(POKEMON).map((pokemon) => {
      return pokemon[1].ID;
    });

    if (pokemon.includes(id)) {
      toast.success('Collection complete!');
      localStorage.setItem(id, 'true');
    } else {
      toast.error('Not a collection target!');
    }
  };

  const onClickMyBall = () => {
    setOpenSelector((prev) => !prev);
  };

  const image = Object.entries(POKEMON).map((pokemon) => {
    return localStorage.getItem(pokemon[1].ID)
      ? pokemon[1].COLOR_IMAGE
      : pokemon[1].GREY_IMAGE;
  });

  return (
    <Layout>
      <Contents>
        <Search input={input} onChange={onChange} onSubmit={onSubmit} />
        <PokemonCard id={id} onClickPokemon={onClickPokemon} />
      </Contents>
      {openSelector && (
        <Selector>
          <Logo src={PokemonLogo} />
          <>
            {image.map((Image, index) => {
              return <Image key={Symbol(index).toString()} />;
            })}
          </>
        </Selector>
      )}
      <MyBall>
        <MyBallImage src={PokemonBall} onClick={onClickMyBall} />
      </MyBall>
    </Layout>
  );
}

const Contents = styled.main`
  width: 27rem;
  height: 100%;
  margin: 0 auto;
  margin-top: 3rem;
`;

const Logo = styled.img``;

const Selector = styled.div`
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 1fr);
  align-items: center;
  justify-items: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  animation: appear 0.5s ease-in-out;
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.97) 0%,
    rgba(0, 0, 0, 0.93) 40%,
    rgba(0, 0, 0, 0.8) 80%,
    rgba(0, 0, 0, 0.2) 100%
  );
  svg {
    width: 12rem;
    height: 12rem;
  }
`;

const MyBall = styled.button`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  background-color: transparent;
  border: none;
  transition: all 0.4s ease-in-out;
  &:hover {
    transform: translate(-50%, 10%) scale(0.96);
    img {
      filter: drop-shadow(1rem 0.6rem 0.6rem rgba(0, 0, 0, 0.5));
    }
  }
`;

const MyBallImage = styled.img`
  cursor: pointer;
  transition: all 0.5s ease-in-out;
`;
