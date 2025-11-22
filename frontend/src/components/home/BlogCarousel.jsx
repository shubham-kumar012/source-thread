import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CategorySection = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:1337/api/categories?populate[posts][populate][0]=bannerImage")
            .then((res) => setCategories(res.data.data))
            .catch((err) => console.error(err));
    }, []);

    const fadeSlideUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.4 } }
    };

    return (
        <motion.div
            className="space-y-16 px-6 py-10"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
        >
            {categories.map((category, i) => (
                <motion.div
                    key={category.id}
                    className="bg-transparent backdrop-blur-md rounded-lg p-6"
                    variants={fadeSlideUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {/* Category Title */}
                    <motion.div
                        className="flex justify-between items-center mb-8"
                        variants={fadeSlideUp}
                    >
                        <h2 className="text-3xl font-bold text-white">{category.name}</h2>
                        <Link
                            to={`/category/${category.slug}`}
                            className="text-orange-500 hover:text-orange-600 font-semibold"
                        >
                            Learn more →
                        </Link>
                    </motion.div>

                    {/* Blog card */}
                    <div className="w-full flex overflow-x-auto no-scrollbar space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12 pb-2 ml-2 sm:ml-4 md:ml-6">
                        {category.posts.map((blog, idx) => (
                            <motion.div
                                key={blog.id}
                                variants={fadeSlideUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <Link to={`/posts/${blog.slug}`}>
                                    <motion.div
                                        className="min-w-[200px] h-[200px] sm:min-w-[220px] sm:h-[220px] md:min-w-[250px] md:h-[250px] lg:min-w-[280px] lg:h-[280px] xl:min-w-[300px] xl:h-[300px] relative rounded-lg overflow-hidden shadow-md cursor-pointer"

                                        whileHover="hover"
                                        initial="rest"
                                        animate="rest"
                                    >
                                        {/* Image */}
                                        <motion.div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{
                                                backgroundImage: `url(http://localhost:1337${blog.bannerImage?.url})`,
                                            }}
                                            variants={{
                                                rest: { scale: 1 },
                                                hover: { scale: 1.08 },
                                            }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                        />

                                        {/* Gradient */}
                                        <motion.div
                                            className="absolute inset-0"
                                            variants={{
                                                rest: { background: "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.2), transparent)" },
                                                hover: { background: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.3), transparent)" },
                                            }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                        />

                                        {/* Title + Date */}
                                        <motion.div
                                            className="absolute bottom-0 p-3 sm:p-4 text-white z-10"
                                            variants={{
                                                rest: { y: 0, opacity: 1 },
                                                hover: { y: -8, opacity: 1 },
                                            }}
                                            transition={{ duration: 0.2, ease: "easeOut" }}
                                        >
                                            <h3 className="text-base sm:text-lg font-semibold">
                                                {blog.title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-300">
                                                {new Date(blog.publishedAt).toLocaleDateString()}
                                            </p>
                                        </motion.div>
                                    </motion.div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default CategorySection;
