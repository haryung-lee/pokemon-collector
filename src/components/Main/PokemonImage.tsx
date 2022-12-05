import styled from 'styled-components';

interface Props {
  sprites: any;
}

export default function PokemonImage({ sprites }: Props) {
  const url =
    sprites.other?.dream_world?.front_default ??
    sprites.other?.home.front_default;
  return <Image src={url} />;
}

const Image = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: contain;
`;
