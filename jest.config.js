module.exports = {
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['js', 'vue', 'json', 'ts'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
    '<rootDir>/store/**/*.ts'
  ],
  testMatch: [
    '**/test/unit/**/*.+(ts|js)'
  ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/'
  ],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json'
    }
  }
}
