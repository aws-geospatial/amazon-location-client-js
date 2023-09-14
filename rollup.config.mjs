// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import commonjs from "@rollup/plugin-commonjs";

const banner = `
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
`;

const input = "./src/index.mjs";
const plugins = [
  nodeResolve({
    browser: true,
  }),
  json(),
  commonjs(),
];

export default [
  // "thin" artifacts that reference externally-installed dependencies
  // src/index.mjs is used as an unprocessed ESM artifact
  {
    input,
    plugins,
    external: [/node_modules/],
    output: [
      // CommonJS for use with require()
      {
        file: "dist/cjs/amazonLocationClient.cjs",
        format: "cjs",
        banner,
        name: "amazonLocationClient",
      },
    ],
  },
  // bundled artifacts that embed dependencies
  {
    input,
    plugins,
    output: [
      // UMD for use on the web (w/o ES Modules)
      {
        file: "dist/amazonLocationClient.js",
        format: "umd",
        banner,
        name: "amazonLocationClient",
      },
    ],
  },
];
