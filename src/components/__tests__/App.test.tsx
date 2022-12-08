import { App } from 'src/App';
import { render, screen } from 'src/utils/test-utils';
import { it, expect } from 'vitest';

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/Movies/i)).toBeInTheDocument();
  });
  
  it('renders correctly', () => {
    const result = render(<App />);
    expect(result).toMatchSnapshot();
  });
});
