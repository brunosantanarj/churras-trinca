import '@testing-library/jest-dom';
import 'jest-styled-components';
import Router from 'next/router';

global.fetch = jest.fn();

const mockedRouter = { push: () => {} };
// @ts-ignore
Router.router = mockedRouter;
