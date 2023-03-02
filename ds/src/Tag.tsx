export default function Button({ children }: { children: string }) {
  return (
    <span className="bg-gray-300 rounded-md p-1 flex-inline">{children}</span>
  );
}
