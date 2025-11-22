import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const CategoryPage = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const URL = process.env.REACT_APP_API_URL;

  const fadeSlideUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

  console.log(slug);

  useEffect(() => {
    axios
      .get(`${URL}/api/categories?filters[slug][$eq]=${slug}&populate[posts][populate][0]=bannerImage`)
      .then((res) => {
        const data = res.data.data[0];
        setCategory(data);
      })
      .catch((err) => console.error(err));
  }, [slug]);

  if (!category) return <div className="text-white p-10">Loading...</div>;

  return (
    <div className="bg-[#1E1E1E] text-white min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 pt-32 pb-10">
      <div className="max-w-6xl mx-auto">
        {/* Category Title */}
        <h1 className="text-4xl font-bold mb-15">{category.name}</h1>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 ss:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      backgroundImage: `url(${URL}${blog.bannerImage?.url})`,
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
      </div>
    </div>
  );
};

export default CategoryPage;
