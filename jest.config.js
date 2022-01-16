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
      "tsconfig": "tsconfig.json"
    }
  },
  "testMatch": [
    "**/test/*.+(ts|tsx|js)"
  ],
  "resetMocks": true,
  reporters: [
    'default',
    ['jest-sonar', {
      outputDirectory: '.',
      outputName: 'test-report.xml'
    }]
  ]
};
