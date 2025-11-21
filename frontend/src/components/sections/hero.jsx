const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-start h-screen text-center px-6 bg-[#1E1E1E] text-white pt-28 sm:pt-32 md:pt-40">
      {/* Tagline */}
      <h2 className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-gray-400 mb-3">
        Discover • Learn • Grow
      </h2>

      {/* Main Heading */}
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
        Blog
      </h1>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-10 px-2">
        Need a break with your coffee? Here you'll find deep dives, practical guides, 
        innovation insights, and other life-changing tips — from 
        <span className="text-orange-500 font-semibold"> Source Thread</span>, just for you.
      </p>

      {/* Search Bar */}
      <div className="flex w-full max-w-md">
        <input
          type="text"
          placeholder="Enter what you are looking for..."
          className="grow px-4 py-2 rounded-l-lg border border-gray-600 bg-[#2C2C2C] text-white focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-r-lg hover:bg-orange-600 transition-colors">
          Search
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
