const nextJest = require('next/jest');
const test = require('node:test');
const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
    testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleDirectories: ['node_modules', '<rootDir>/src'],
    testEnvironment: 'jsdom',
};

module.exports = createJestConfig(customJestConfig);