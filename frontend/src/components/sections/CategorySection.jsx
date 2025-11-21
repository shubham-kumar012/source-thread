import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CategorySection = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:1337/api/categories?populate[posts][populate]=bannerImage")
            .then((res) => setCategories(res.data.data))
            .catch((err) => console.error(err));
    }, []);

    categories.map((category) => {
        console.log(category);
    })

    return (
        <div className="space-y-16 px-6 py-10">
            {categories.map((category) => (
                <div key={category.id} className="bg-transparent backdrop-blur-md rounded-lg p-6">
                    {/* Category Title */}
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-white">{category.name}</h2>
                        <Link
                            to={`/category/${category.slug}`}
                            className="text-orange-500 hover:text-orange-600 font-semibold"
                        >
                            Learn more →
                        </Link>
                    </div>

                    {/* Blog Carousel */}
                    <div className="w-full flex overflow-x-auto no-scrollbar space-x-6 sm:space-x-8 md:space-x-10 lg:space-x-12 pb-2 ml-2 sm:ml-4 md:ml-6">
                        {category.posts.map((blog) => (
                            <Link to={`/posts/${blog.slug}`}>
                                <div
                                    key={blog.id}
                                    className="min-w-[200px] h-[200px] sm:min-w-[220px] sm:h-[220px] md:min-w-[250px] md:h-[250px] lg:min-w-[280px] lg:h-[280px] xl:min-w-[300px] xl:h-[300px] relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                                >
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{
                                            backgroundImage: `url(http://localhost:1337${blog.bannerImage?.url})`,
                                        }}
                                    ></div>

                                    {/* Bottom Gradient Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent"></div>

                                    {/* Text Content */}
                                    <div className="absolute bottom-0 p-3 sm:p-4 text-white z-10">
                                        <h3 className="text-base sm:text-lg font-semibold">{blog.title}</h3>
                                        <p className="text-xs sm:text-sm text-gray-300">
                                            {new Date(blog.publishedAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            ))}
        </div>
    );
};

export default CategorySection;
