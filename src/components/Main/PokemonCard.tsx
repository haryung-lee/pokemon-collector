import styled from 'styled-components';
import { usePokemon } from 'hooks/usePokemon';
import { colors, fonts } from 'styles/theme';
import { flexCenter } from 'styles/utils';
import Error from 'assets/ErrorImage.png';
import PokemonBall from 'assets/PokemonBall.png';

function LoadingSkeleton() {
  return (
    <Loading>
      <SkeletonImage src={PokemonBall} alt="loading data" />
    </Loading>
  );
}

function ErrorSkeleton() {
  return (
    <Pokemon isCursor={false}>
      <ErrorImage src={Error} alt="error image" />
      <ErrorText>
        Sorry man :( <br />
        Please input another id!
      </ErrorText>
    </Pokemon>
  );
}

const SkeletonImage = styled.img`
  position: relative;
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  animation: rotate 1s linear infinite;
  margin: 0 auto;
  top: 40%;
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  width: 100vw;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const ErrorImage = styled.img`
  width: 18rem;
  height: 18rem;
  object-fit: contain;
`;

const ErrorText = styled.p`
  margin-top: 5rem;
  ${fonts.subtitle2};
  color: ${colors.mint};
`;

export default function PokemonCard({ id }: { id: string }) {
  const { data, isLoading, isError, isSuccess } = usePokemon(id);

  console.log(data);
  return (
    <Pokemon isCursor={isSuccess}>
      {isError && <ErrorSkeleton />}
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

const Pokemon = styled.div<{ isCursor: boolean }>`
  margin-top: 3rem;
  height: 80%;
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
      background: palevioletred;
      color: white;
    }
    cursor: pointer;
    `}
`;

const PokemonImage = styled.img`
  min-width: 18rem;
  min-height: 18rem;
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
  ${fonts.subtitle3};
  ${flexCenter};
  color: ${colors.mint};
  flex-direction: column;
`;

const PokemonName = styled.p`
  color: ${colors.white};
  ${fonts.subtitle1};
  margin-top: 1rem;
`;

const Value = styled.p`
  color: ${colors.mint};
`;
