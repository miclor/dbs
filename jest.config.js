module.exports = {
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.json",
      disableSourceMapSupport: true
    }
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  testMatch: ["**/tests/*.test.(ts|js)", "**/tests/**/*.test.(ts|js)"],
  testEnvironment: "node",
  collectCoverage: true
};
