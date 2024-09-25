type props = {
  className?: string;
};
const HeroSection = ({ className }: props) => {
  return (
    <div className={className}>
      <div className="logo" />
      <div className="text">
        <p>Illustration</p>
        <p>Graphic Design</p>
        <p>& Art</p>
      </div>
    </div>
  );
};

export default HeroSection;
