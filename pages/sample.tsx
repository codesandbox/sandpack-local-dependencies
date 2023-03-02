import Head from "next/head";
import { Button, Tag } from "@internals/ds";

export default function Sample() {
  return (
    <div>
      <Head>
        <script src="https://cdn.tailwindcss.com" async></script>
      </Head>
      <div className="p-3">
        <p>
          <strong>Sandpack</strong>
        </p>

        <div>
          <Button type="primary">Button1</Button>
          <Button type="secondary">Button2</Button>
          <Tag>Tag</Tag>
        </div>
      </div>
    </div>
  );
}
