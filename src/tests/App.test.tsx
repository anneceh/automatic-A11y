import 'vitest-axe/extend-expect'
import { render } from '@testing-library/react'
import { expect, test } from 'vitest'

import * as matchers from 'vitest-axe/matchers'
import type { AxeMatchers } from 'vitest-axe/matchers'

import axe from './axe-helper.tsx'
import App from '../App.tsx'

expect.extend(matchers)

test('should not have any accessibility errors', async () => {
  const { container } = render(<App/>)
  const results = await axe(container)
	expect(results).toHaveNoViolations()
})

declare module "vitest" {
  export interface Assertion extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}