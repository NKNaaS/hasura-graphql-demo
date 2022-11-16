module.exports = {
  schema: [
    {
      "http://localhost:8080/v1/graphql": {
        headers: {},
      },
    },
  ],
  documents: ["src/**/*.{ts,tsx}"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        scalars: {
          timestamptz: "string",
        }
      }
    },
  },
};
