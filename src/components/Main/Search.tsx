import styled from 'styled-components';

import { colors, fonts } from 'styles/theme';
import { ReactComponent as SearchImage } from 'assets/Search.svg';

interface Props {
  input: string;
  onChange: (_e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (_e: React.FormEvent<HTMLFormElement>) => void;
}

export default function Search({ input, onChange, onSubmit }: Props) {
  return (
    <Form onSubmit={onSubmit}>
      <SearchImage width="20" height="20" fill="#A1A1A1" />
      <SearchInput
        type="number"
        placeholder="input number, then press enter"
        onChange={onChange}
        value={input}
        autoFocus
      />
    </Form>
  );
}

const Form = styled.form`
  height: 4rem;
  width: 100%;
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
