const { configureAxe } = require('jest-axe')

const axe = configureAxe({
  rules: {

  }, 
  impactLevels: ['critical','serious','moderate','minor']
})

module.exports = axe