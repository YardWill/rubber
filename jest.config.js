module.exports = {
  testURL: 'http://localhost',
  testMatch: ['<rootDir>/__test__/*'],
  // collectCoverage: true,
  // collectCoverageFrom: [
  //   '<rootDir>/src/*.ts',
  // ],
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
};
