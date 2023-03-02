import type { NextPage } from "next";
import Head from "next/head";

import { Sandpack } from "@codesandbox/sandpack-react";

import { Button, Tag } from "./../ds";

import rawSample from "./sample?raw";
import dsRaw from "./../.build-ds?raw";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <script src="https://cdn.tailwindcss.com" async></script>
      </Head>
      <div className="p-3">
        <p>
          <strong>Next.js</strong>
        </p>

        <div>
          <Button type="primary">Button1</Button>
          <Button type="secondary">Button2</Button>
          <Tag>Tag</Tag>
        </div>
      </div>

      <Sandpack
        files={{
          "/pages/index.js": rawSample,
          "/node_modules/@internals/ds/package.json": {
            hidden: true,
            code: JSON.stringify({
              name: "@design-system",
              main: "./index.js",
            }),
          },
          "/node_modules/@internals/ds/index.js": {
            hidden: true,
            code: dsRaw,
          },
        }}
        template="nextjs"
      />
    </div>
  );
};

export default Home;
