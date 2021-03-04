module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFiles: ["@testing-library/react/dont-cleanup-after-each"],
  setupFilesAfterEnv: ["<rootDir>/utils/setupTests.ts"],
  transform: {
    "\\.[jt]sx?$": ["babel-jest", { configFile: "./babel.tests-config.js" }],
  },
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "^atoms(.*)$": "<rootDir>/components/atoms/$1",
    "^molecules(.*)$": "<rootDir>/components/molecules/$1",
    "^organisms(.*)$": "<rootDir>/components/organisms/$1",
    "^context(.*)$": "<rootDir>/context/$1",
    "^hooks(.*)$": "<rootDir>/hooks/$1",
    "^resources(.*)$": "<rootDir>/resources/$1",
    "^types(.*)$": "<rootDir>/types/$1",
    "^utils(.*)$": "<rootDir>/utils/$1",
  },
  verbose: true,
};
