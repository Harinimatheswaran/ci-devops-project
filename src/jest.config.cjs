module.exports = {
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
      "^.+\\.svg$": "jest-svg-transformer",  // Add this line
    },
  };
  