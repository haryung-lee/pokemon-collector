import styled from 'styled-components';

import Error from 'assets/ErrorImage.png';
import PokemonBall from 'assets/PokemonBall.png';
import { colors, fonts } from 'styles/theme';
import { Pokemon } from './PokemonCard';

export function LoadingSkeleton() {
  return (
    <Loading>
      <SkeletonImage src={PokemonBall} alt="loading data" />
    </Loading>
  );
}

export function ErrorSkeleton() {
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

const Loading = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100vw;
  z-index: 3;
  background-color: rgba(0, 0, 0, 0.7);
`;

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

const ErrorImage = styled.img`
  width: 18rem;
  height: 18rem;
  object-fit: contain;
`;

const ErrorText = styled.p`
  margin-top: 5rem;
  ${fonts.text2};
  color: ${colors.mint};
`;
