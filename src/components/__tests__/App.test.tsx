import { App } from "src/App";
import { render, screen } from "src/utils/test-utils";

describe('Simple working test', () => {
  test('the title is visible', () => {
    render(<App />);
    expect(screen.getByText(/Movies/i)).toBeInTheDocument();
  });
});
