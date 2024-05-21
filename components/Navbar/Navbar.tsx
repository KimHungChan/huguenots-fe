const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between px-24 font-ptSans">
      <a href="/">
        <img src="./Huguenots_mark.svg" alt="Huguenots logo" />
      </a>
      <div className="flex gap-4 items-center">
        <img src="/Flag_GBx2.png" alt="User icon" className="h-5" />
        <span className="text-base tracking-small">Professional Investor</span>
      </div>
    </nav>
  );
};

export default Navbar;
