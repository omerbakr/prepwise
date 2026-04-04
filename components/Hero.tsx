const Hero = () => {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-0 -z-50 bg-[url(/images/background.avif)] bg-cover bg-center bg-no-repeat" />
      <div className="absolute -top-72 left-1/2 -z-50 h-full min-h-64 w-full min-w-96 -translate-x-1/2 rounded-full bg-[url(/images/hero-grid.svg)] bg-center bg-no-repeat" />
    </section>
  );
};

export default Hero;
