type Props = {
  className?: string;
};

const Navbar = ({ className }: Props) => {
  return (
    <nav className={className}>
      <div>
        <p>Menu</p>
      </div>
    </nav>
  );
};

export default Navbar;
