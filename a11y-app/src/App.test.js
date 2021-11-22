import { render, screen } from '@testing-library/react';
import App from './App';

const { axe, toHaveNoViolations } = require('jest-axe')
expect.extend(toHaveNoViolations)

it('should not have any accessibility errors', async () => {
  render(<App/>, document.body)
  const results = await axe(document.body)
  expect(results).toHaveNoViolations()
})