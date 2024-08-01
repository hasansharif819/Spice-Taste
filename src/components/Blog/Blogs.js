import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Blog from './Blog';

const Blogs = () => {
    const { data: blogs, isLoading, refetch } = useQuery('blogs', () =>
        fetch('https://spice-taste-server.vercel.app/blogs')
            .then(res => res.json())
    );

    if (isLoading) {
        return <Loading />;
    }

    // Check if blogs exist and is an array
    if (!blogs || !Array.isArray(blogs)) {
        return <p>No blogs found</p>;
    }

    return (
        <div>
            {blogs?.map(blog => (
                <Blog
                    key={blog._id}
                    blog={blog}
                    refetch={refetch}
                />
            ))}
        </div>
    );
};

export default Blogs;
