module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>'],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1'
  },
  globals: {
    'ts-jest': {
      diagnostics: false
    }
  },
  watchPathIgnorePatterns: ['/node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['/**/*.test.(ts|js|tsx|jsx)']
};
