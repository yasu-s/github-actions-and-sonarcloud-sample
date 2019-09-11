module.exports = {
  "testEnvironment": "node",
  "verbose": true,
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "globals": {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  },
  "testMatch": [
    "**/test/*.+(ts|tsx|js)"
  ],
  "resetMocks": true,
  "testResultsProcessor": "jest-sonar-reporter"
};
