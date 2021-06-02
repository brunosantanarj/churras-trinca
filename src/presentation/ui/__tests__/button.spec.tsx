import { render, screen } from '@testing-library/react';
import Button from '../button';

describe('<Button />', () => {
  it('should render correctly', () => {
    render(<Button>UIButton</Button>);
    expect(screen.getByText(/UIButton/).tagName).toEqual('BUTTON');
  });
});
