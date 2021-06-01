import DefaultLayout from './DefaultLayout';
import { render, screen } from '@testing-library/react';

describe('<DefaultLayout />', () => {
  it('should render correctly', () => {
    render(<DefaultLayout children={''} />);
    expect(screen.getByTestId(/wrapper/).tagName).toEqual('DIV');
  });

  it('should render children correctly in parent', () => {
    render(<DefaultLayout children={<div data-testid="child" />} />);
    expect(screen.getByTestId(/wrapper/)).toContainElement(screen.getByTestId(/child/))
  });

  it('should render default title', () => {
    render(<DefaultLayout children={<div data-testid="child" />} />);
    expect(screen.getByTestId(/title/).textContent).toBe('Agenda de Churras');
  });

  it('should render custom title', () => {
    render(<DefaultLayout children={<div data-testid="child" />} title="Custom title" />);
    expect(screen.getByTestId(/title/).textContent).toBe('Custom title');
  });
});
