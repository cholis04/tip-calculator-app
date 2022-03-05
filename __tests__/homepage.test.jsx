import { render, cleanup } from '@testing-library/react';
import Home from '../pages';


afterEach(cleanup)

describe('Home', () => {
  it('renders a heading level 1 splitter', () => {
    const {getByRole} = render(<Home />);

    const heading = getByRole('heading', {
      level:1
    }).textContent;

    expect(heading).toBe("SPLITTER");
  });
});

