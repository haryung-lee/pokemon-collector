import styled from 'styled-components';

import { colors, fonts } from 'styles/theme';
import { flexCenter } from 'styles/utils';
import { usePokemon } from 'hooks/usePokemon';
import PokemonImage from './PokemonImage';

interface Props {
  id: string;
  onClickPokemon: (_e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function PokemonCard({ id, onClickPokemon }: Props) {
  const { data: pokemon } = usePokemon(id);
  return (
    <Pokemon isCursor onClick={onClickPokemon}>
      <PokemonImage sprites={pokemon?.sprites} />
      <PokemonName>{pokemon?.name}</PokemonName>
      <DataComponent>
        <Data>
          EXP
          <Value>{pokemon?.base_experience}</Value>
        </Data>
        <Data>
          WEIGHT<Value>{pokemon?.weight}</Value>
        </Data>
        <Data>
          HEIGHT<Value>{pokemon?.height}</Value>
        </Data>
      </DataComponent>
    </Pokemon>
  );
}

export const Pokemon = styled.div<{ isCursor: boolean }>`
  margin-top: 3rem;
  height: 40rem;
  padding: 2rem;
  background-color: ${colors.darkGreen};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  transition: all 0.5s ease-in-out;
  ${({ isCursor }) =>
    isCursor &&
    `
    cursor: pointer;
    &:hover {
    background: ${colors.pink};
    color: ${colors.white};
    }`}
`;

const DataComponent = styled.ul`
  ${flexCenter};
  gap: 1rem;
  margin-top: 2rem;
`;

const Data = styled.li`
  border-radius: 50%;
  width: 7rem;
  height: 7rem;
  background-color: ${colors.green};
  ${fonts.text3};
  ${flexCenter};
  color: ${colors.mint};
  flex-direction: column;
`;

const PokemonName = styled.p`
  color: ${colors.white};
  ${fonts.text1};
  margin-top: 1rem;
`;

const Value = styled.p`
  color: ${colors.mint};
`;
