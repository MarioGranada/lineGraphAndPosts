import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// ApexCharts needs ResizeObserver/SVG layout, which jsdom lacks
vi.mock('react-apexcharts', () => ({ default: () => <div data-testid="chart" /> }));

vi.mock('./shared/services/PostsAPI/PostAPI', () => ({
  getAllPosts: vi.fn(() =>
    Promise.resolve({ data: [{ userId: 1, id: 7, title: 'mock post title', body: 'mock body' }] })
  ),
  getPostsByUserId: vi.fn(() => Promise.resolve({ data: [] })),
  getCommentsByPostId: vi.fn(() => Promise.resolve({ data: [] }))
}));

const renderAt = (path) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );

test('renders the line graph route inside the layout', () => {
  const { container } = renderAt('/');
  expect(screen.getByRole('heading', { name: /line graph/i })).toBeInTheDocument();
  expect(screen.getByTestId('chart')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Posts' })).toBeInTheDocument();
  expect(container.querySelector('.footer-container')).toBeInTheDocument();
});

test('renders the posts route with data from the posts API', async () => {
  renderAt('/posts');
  expect(screen.getByRole('heading', { name: 'Post Management' })).toBeInTheDocument();
  expect(await screen.findByText('mock post title')).toBeInTheDocument();
});
