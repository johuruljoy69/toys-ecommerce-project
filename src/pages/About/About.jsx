import React from 'react';
import useTitle from '../../hooks/useTitle';

const About = () => {
    useTitle('About')
    return (
        <div>
            <h2>this is about page</h2>
        </div>
    );
};

export default About;