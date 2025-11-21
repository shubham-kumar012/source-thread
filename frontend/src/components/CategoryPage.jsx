import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CategoryPage = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);

  console.log(slug);

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/categories?filters[slug][$eq]=${slug}&populate[posts][populate][0]=bannerImage`)
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
          {category.posts.map((blog) => (
            <Link to={`/posts/${blog.slug}`} key={blog.id}>
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow relative h-[250px]">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(http://localhost:1337${blog.bannerImage?.url})`,
                  }}
                ></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 p-4 z-10 text-white">
                  <h3 className="text-lg font-semibold">{blog.title}</h3>
                  <p className="text-sm text-gray-300">
                    {new Date(blog.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
