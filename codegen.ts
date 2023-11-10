import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "apollo/documents/**/*.gql",
  documents: ["apollo/documents/**/*.gql"],
  generates: {
    "./apollo/__generated__/client/": {
      preset: "client",
      config: {
        enumsAsTypes: true
      },
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "./apollo/__generated__/server/resolvers-types.ts": {
      config: {
        enumsAsTypes: true
      },
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
  ignoreNoDocuments: true,
};

export default config;