import styled from 'styled-components';

export const Grid = styled.section.attrs({
  className: 'grid -mt-10 max-w-3xl w-full self-center mb-10'
})`
  grid-template-areas: "a a";
  gap: 30px;
  grid-auto-rows: auto;
`;