import React, { useEffect, useState } from 'react';
import NewsCart from './NewsCart';

const LatestNews = () => {
    const [toyNews, setToyNews] = useState([])

    const url = 'https://b7a11-toy-marketplace-server-side-johuruljoy69.vercel.app/addedtoys'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToyNews(data)
            })
    }, [])

    return (
        <div className='text-center mt-24 mb-24'>
            <h2 className='text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600'>Latest News</h2>
            <p className='text-xl font-semibold mb-10'>Our News & Events</p>
            <div className='grid md:grid-cols-3 gap-6 mx-10'>
                {
                    toyNews.slice(0, 3).map(toyNew => <NewsCart
                    key={toyNew._id}
                    toyNew={toyNew}
                    ></NewsCart>)
                }
            </div>
        </div>
    );
};

export default LatestNews;