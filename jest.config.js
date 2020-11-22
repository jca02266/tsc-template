const path = require('path');

module.exports = {
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  roots: [
    path.join(__dirname, "src"),
  ],
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
}
