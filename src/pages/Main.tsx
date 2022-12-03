import styled from 'styled-components';
import Header from '../components/Header';
import { colors, fonts } from '../styles/theme';
import { flexCenter } from '../styles/utils';
import { ReactComponent as SearchImage } from '../assets/Search.svg';

export default function Main() {
  return (
    <Component>
      <Header />
      <Contents>
        <Search>
          <SearchImage width="20" height="20" fill="#A1A1A1" />
          <SearchInput type="number" placeholder="pokemon id" />
        </Search>
        <Pokemon>
          <Image>
            <PokemonImage src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
          </Image>
          <PokemonName>bulbasaur</PokemonName>
          <PokemonWeight>weight: 23</PokemonWeight>
          <PokemonHeight>weight: 23</PokemonHeight>
        </Pokemon>
      </Contents>
    </Component>
  );
}

const Component = styled.div`
  height: 100vh;
  background-color: ${colors.yellow};
`;

const Contents = styled.main`
  width: 100%;
  height: 100%;
  ${flexCenter};
  flex-direction: column;
  gap: 2rem;
`;

const Search = styled.div`
  height: 4rem;
  width: 30rem;
  background-color: ${colors.white};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
`;

const SearchInput = styled.input`
  height: 60%;
  width: 100%;
  margin: 0 1rem;
  background-color: transparent;
  ${fonts.input};
`;

const Pokemon = styled.div`
  height: 40rem;
  width: 30rem;
  padding: 3rem;
  background-color: ${colors.darkGreen};
  border-radius: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.div`
  width: 20rem;
  height: 20rem;
`;

const PokemonImage = styled.img``;

const PokemonName = styled.p`
  color: ${colors.white};
  ${fonts.subtitle1};
`;

const PokemonWeight = styled.p`
  color: ${colors.white};
  ${fonts.subtitle2};
`;

const PokemonHeight = styled.p`
  color: ${colors.white};
  ${fonts.subtitle2};
`;
