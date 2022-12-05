import styled from 'styled-components';

import { usePokemon } from 'hooks/usePokemon';
import { colors, fonts } from 'styles/theme';
import { flexCenter } from 'styles/utils';
import { LoadingSkeleton, ErrorSkeleton } from './Skeleton';

interface Props {
  id: string;
  onClickPokemon: (_e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function PokemonCard({ id, onClickPokemon }: Props) {
  const { data, isLoading, isError, isSuccess } = usePokemon(id);
  if (isError) return <ErrorSkeleton />;
  return (
    <Pokemon isCursor={isSuccess} onClick={onClickPokemon}>
      {isLoading && <LoadingSkeleton />}
      {isSuccess && (
        <>
          <PokemonImage
            src={data?.sprites?.other?.dream_world?.front_default}
          />
          <PokemonName>{data?.name}</PokemonName>
          <DataComponent>
            <Data>
              EXP
              <Value>{data?.base_experience}</Value>
            </Data>
            <Data>
              WEIGHT<Value>{data?.weight}</Value>
            </Data>
            <Data>
              HEIGHT<Value>{data?.height}</Value>
            </Data>
          </DataComponent>
        </>
      )}
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
  ${(props) =>
    props.isCursor &&
    `&:hover {
      background: ${colors.pink};
      color: ${colors.white};
    }
    cursor: pointer;
    `}
`;

const PokemonImage = styled.img`
  width: 20rem;
  height: 20rem;
  object-fit: contain;
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
