import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// App relies on a Router from index.jsx; the CRA template test rendered it bare
// and looked for a "learn react" link that does not exist, so it never passed.
test('renders the line graph route with the layout footer', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(container.querySelector('.line-graph-container')).toBeInTheDocument();
  expect(container.querySelector('.post-container')).not.toBeInTheDocument();
  expect(container.querySelector('.footer')).toBeInTheDocument();
});
