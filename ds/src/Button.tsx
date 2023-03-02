import reverse from "reverse-string";

export default function Button({
  children,
  type,
}: {
  children: string;
  type: "primary" | "secondary";
}) {
  return (
    <button
      className={`${
        type === "primary"
          ? "bg-blue-500 hover:bg-blue-400"
          : "bg-green-500 hover:bg-green-400"
      } rounded-md p-2 text-white`}
    >
      {reverse(children)}
    </button>
  );
}
