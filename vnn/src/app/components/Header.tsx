export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between px-20 py-10 text-black bg-white">
      <div className="text-3xl font-bold">VNN DESIGN</div>
      <div className="flex flex-row items-center space-x-4">
        <button>Home</button>
        <button>Contact</button>
      </div>
    </div>
  );
}
