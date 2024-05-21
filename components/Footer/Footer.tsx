const Footer = () => {
  return (
    <footer className="bg-huguenots-blue text-white p-4 px-24 font-ptSans">
      <img src="/Huguenots_mark.svg" alt="Huguenots logo" className="my-7" />
      <p className="text-sm mb-9">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed etiam
        tincidunt, nunc auctor. Amet, sed viverra. Dolor sit amet, consectetur
        adipiscing elit. Sed etiam tincidunt, nunc auctor. Amet, sed viverra.
        Dolor sit amet, consectetur adipiscing elit. Sed etiam tincidunt, nunc
        auctor. Amet, sed viverra. Dolor sit amet, consectetur adipiscing elit.
        Sed etiam tincidunt, nunc auctor. Amet, sed viverra. Dolor sit amet,
        consectetur adipiscing elit. Sed etiam tincidunt, nunc auctor. Amet, sed
        viverra. Dolor sit amet, consectetur adipiscing elit. Sed etiam
        tincidunt, nunc auctor. Amet, sed viverra. Dolor sit amet, consectetur
        adipiscing elit.
      </p>
      <nav className="flex gap-4">
        <a href="/terms-of-use">Terms of Use</a>
        <a href="/legal-terms">Legal Terms</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/cookie-policy">Cookie Policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
