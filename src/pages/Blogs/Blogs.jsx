import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blog')
    return (
        <div>
            <h2>This is blogs page</h2>
        </div>
    );
};

export default Blogs;