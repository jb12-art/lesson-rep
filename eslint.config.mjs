import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: true, // used for grouping tests
        test: true, // used to create tests
        it: true, // alternative way to create tests
        expect: true, // used for test assertions
        require: true, //  Used in Node.js files like Tailwind config
        module: true, // Used in Node.js files like Tailwind config
        process: true, // Used for environment variables later
      },
    },
  },
  pluginJs.configs.recommended,
];
