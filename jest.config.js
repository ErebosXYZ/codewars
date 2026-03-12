export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.jsx?$': 'ts-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/*.test.js', '**/*.test.ts'],
};
