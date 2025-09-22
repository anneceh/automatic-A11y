import { afterEach, expect } from 'vitest'
import { cleanup } from '@testing-library/react'

import * as matchers from 'vitest-axe/matchers'
import type { AxeMatchers } from 'vitest-axe/matchers'

afterEach(() => {
  cleanup()
})

expect.extend(matchers)

declare module "vitest" {
  export interface Assertion extends AxeMatchers {}
  export interface AsymmetricMatchersContaining extends AxeMatchers {}
}