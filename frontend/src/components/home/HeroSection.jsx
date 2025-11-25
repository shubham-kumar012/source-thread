import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const HeroSection = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.10,
      },
    },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section>
      <motion.div
        className="flex flex-col items-center justify-start h-screen text-center px-6 bg-[#1E1E1E] text-white pt-32 md:pt-40"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Tagline */}
        <motion.h2
          variants={slideUp}
          className="text-xs mt-15 sm:text-sm md:text-base uppercase tracking-widest text-gray-400 mb-3"
        >
          Discover • Learn • Grow
        </motion.h2>

        {/* Main heading */}
        <motion.h1
          variants={slideUp}
          className="text-7xl lg:text-8xl sm:text-7xl md:text-7xl font-bold mb-6"
        >
          Blog
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={slideUp}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mb-10 px-2"
        >
          Need a break with your coffee? Here you'll find deep dives, practical guides,
          innovation insights, and other life-changing tips — from
          <span className="text-orange-500 font-semibold"> Source Thread</span>, just for you.
        </motion.p>

        {/* Search Bar */}
        <motion.div variants={slideUp} className="flex w-full max-w-md relative">
          <input
            type="text"
            placeholder={"Enter what you are looking for..."}
            className="grow px-4 py-3 ss: w-full lg:py-4 rounded-l-lg border border-gray-600 bg-[#2C2C2C] text-white focus:outline-none focus:ring-1 focus:ring-gray-400"
          />

          <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-r-lg hover:bg-orange-600 transition-colors">
            <FaSearch />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
