import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const BlogPage = () => {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:1337/api/posts?filters[slug][$eq]=${slug}&populate[0]=bannerImage&populate[1]=author`)
            .then((res) => {
                const post = res.data.data[0];
                setBlog(post);
            })
            .catch((err) => console.error(err));
    }, [slug]);

    if (!blog) return <div className="text-white p-10">Loading...</div>;

    const { title, content, publishedAt, bannerImage, author } = blog;
    const imageUrl = bannerImage?.url;
    console.log(blog)

    return (
        <div className="bg-transparent text-white min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 pt-32 pb-10">
            <div className="max-w-4xl mx-auto">
                {/* Title */}
                <h1 className="text-4xl font-bold mb-4">{title}</h1>

                {/* Author & Date */}
                <p className="text-sm text-gray-400 mb-2">
                    By <span className="text-orange-500 font-medium">{author.name || 'Unknown Author'}</span>
                </p>
                <p className="text-sm text-gray-400 mb-8">
                    Published on {new Date(publishedAt).toLocaleDateString()}
                </p>

                {/* Hero Image */}
                {imageUrl && (
                    <div className="w-full aspect-video rounded-2xl overflow-hidden mb-10 flex justify-center items-center">
                        <img
                            src={`http://localhost:1337${imageUrl}`}
                            alt={title}
                            className="w-full h-full object-fit"
                        />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-invert text-gray-200">
                    {Array.isArray(content) &&
                        content.map((block, idx) => {
                            if (block.type === 'paragraph') {
                                const text = block.children?.map((child) => child.text).join('');
                                return (
                                    <p key={idx} className="text-base text-gray-200 mb-4">
                                        {text}
                                    </p>
                                );
                            }
                            return null;
                        })}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
