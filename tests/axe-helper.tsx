const { configureAxe } = require('vitest-axe')

const axe = configureAxe({
  rules: {

  }, 
  impactLevels: ['critical','serious','moderate','minor']
})

export default axe