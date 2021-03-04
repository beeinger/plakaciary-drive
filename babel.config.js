module.exports = function (api) {
  return {
    presets: ["next/babel"],
    plugins: [
      [
        "styled-components",
        {
          ssr: true,
          preprocess: false,
          fileName: false,
          displayName: api.env(["development"]),
        },
      ],
    ],
  };
};
