export default function Button({ children }: { children: string }) {
  return (
    <button className="bg-blue-500 rounded-md p-2 hover:bg-blue-300 text-white">
      {children}
    </button>
  );
}
