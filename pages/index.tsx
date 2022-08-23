import type { NextPage } from "next";
import Head from "next/head";

import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackCodeEditor,
} from "@codesandbox/sandpack-react";

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
          <strong>Renderd in NextJS</strong>
        </p>

        <div>
          <Button type="primary">Button1</Button>
          <Button type="secondary">Button2</Button>
          <Tag>Tag</Tag>
        </div>
      </div>

      <SandpackProvider
        options={{
          externalResources: ["https://cdn.tailwindcss.com"],
        }}
        files={{
          "/App.tsx": rawSample,
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
        template="react-ts"
      >
        <SandpackLayout>
          <SandpackCodeEditor showLineNumbers showTabs />
          <SandpackPreview />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
};

export default Home;
