module.exports = {
  presets: ["@babel/env", "@babel/typescript", "@babel/react"],
  plugins: [
    [
      "styled-components",
      {
        displayName: true,
        fileName: false,
      },
    ],
  ],
};
