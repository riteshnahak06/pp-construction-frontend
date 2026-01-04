function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">
          P&amp;P Construction
        </h1>

        <ul className="hidden md:flex space-x-8 text-sm text-gray-200">
          <li className="hover:text-yellow-400 cursor-pointer">Home</li>
          <li className="hover:text-yellow-400 cursor-pointer">About</li>
          <li className="hover:text-yellow-400 cursor-pointer">Projects</li>
          <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
