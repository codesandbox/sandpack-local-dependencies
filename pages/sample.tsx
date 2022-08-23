import { Button, Tag } from "@internals/ds";

export default function Sample() {
  return (
    <div>
      <p>
        <strong>Renderd in SandPack</strong>
      </p>

      <div>
        <Button type="primary">Button1</Button>
        <Button type="secondary">Button2</Button>
        <Tag>Tag</Tag>
      </div>
    </div>
  );
}
