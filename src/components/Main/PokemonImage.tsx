import styled from 'styled-components';

import PokemonLogo from 'assets/PokemonLogo.png';

interface Props {
  sprites: any;
}

export default function PokemonImage({ sprites }: Props) {
  const url =
    sprites.other?.dream_world?.front_default ??
    sprites.other?.home.front_default;
  if (url) return <Image src={url} alt="pokemon" />;
  return <Image src={PokemonLogo} alt="pokemon" />;
}

const Image = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: contain;
`;
