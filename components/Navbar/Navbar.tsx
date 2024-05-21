const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between px-24">
      <a href="/">
        <img src="./Huguenots_mark.svg" alt="Huguenots logo" />
      </a>
      <div className="flex gap-4 items-center">
        <img src="/Flag_GBx2.png" alt="User icon" />
        <span className="text-base">Professional Investor</span>
      </div>
    </nav>
  );
};

export default Navbar;
