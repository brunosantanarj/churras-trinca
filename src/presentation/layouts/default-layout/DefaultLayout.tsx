import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as Styled from './DefaultLayout.styled';

type Props = {
  children: React.ReactChild,
  title?: string;
  allFeatured?: boolean;
}

const DefaultLayout = ({ children, title, allFeatured }: Props) => (
  <ThemeProvider theme={{ allFeatured }}>
    <Styled.Wrapper data-testid="wrapper">
      <Styled.Header>
        <Styled.Title data-testid="title">{title || 'Agenda de Churras'}</Styled.Title>
      </Styled.Header>
      {children}
      <Styled.Footer>
        <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity=".2">
            <path d="M48 48H0V0h48v48zM2 46h44V2H2v44z" fill="#000" />
            <path d="M12 16h-2v-1h6v1h-3v6h-1v-6zM27 22h-1l-2-2h-1v2h-2v-7h4l2 2-1 3 1 2zm-4-6v2h2l1-1-1-1h-2zM34 22v-7h1v7h-1zM14 31v-5h2v7h-1l-4-5v5H9v-7h2l3 5zM27 32l-2 1c-3 0-4-2-4-4s1-4 4-4l2 2-1 1-1-1c-2 0-3 1-3 2s1 3 3 3l1-1 1 1zM36 32h-3l-1 1h-2l4-7h1l4 7h-2l-1-1zm-1-4l-2 3h3l-1-3z" fill="#231F20" />
          </g>
        </svg>
      </Styled.Footer>
    </Styled.Wrapper>
  </ThemeProvider>
);

export default DefaultLayout;
