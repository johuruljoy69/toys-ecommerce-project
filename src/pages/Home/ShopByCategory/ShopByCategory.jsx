import React, { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../../contexts/AuthProvider';
import CategoryCart from './CategoryCart';

const ShopByCategory = () => {
    const { user } = useContext(AuthContext);
    const [categoryToys, setCategoryToys] = useState([])

    const url = 'http://localhost:5000/addedtoys'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCategoryToys(data)
            })
    }, [])

    const [filterCategory, setFilterCategory] = useState([])
    const handleToysCategory = (category, _id) => {
        const categoryItems = categoryToys.filter(categoryToy => categoryToy.category === category);
        if (category === 'Sports Car') {
            setFilterCategory(categoryItems)
        }
        else if (category === 'Police Car') {
            setFilterCategory(categoryItems)
        }
        else if (category === 'Fire Truck') {
            setFilterCategory(categoryItems)
        }
    }

    return (
        <div className='text-center mt-24 mb-12'>
            <h2 className='text-5xl font-bold mb-6'>Shop By Category: {categoryToys.length}  </h2>
            <p className='mb-6'>Our Collections</p>
            {/* <Tabs>
                <TabList className='text-xl font-semibold'>
                    <Tab>Sports Car</Tab>
                    <Tab>Mini Police Car</Tab>
                    <Tab>Mini Fire Truck</Tab>
                </TabList>                
                    <TabPanel onClick={() => handleToysCategory('Sports Car')}>
                    
                    </TabPanel>                
                
                    <TabPanel onClick={() => handleToysCategory('Police Car')}>
                        
                    </TabPanel>                
              
                    <TabPanel onClick={() => handleToysCategory('Fire Truck')}>
                        
                    </TabPanel>
                
            </Tabs> */}

            <div className='flex justify-center gap-4 mt-10'>
                <button onClick={() => handleToysCategory('Sports Car')} className="bg-blue-500 flex items-center hover:bg-blue-700 text-white font-bold py-4 px-7 rounded-full">Sports Car</button>
                <button onClick={() => handleToysCategory('Police Car')} className="bg-purple-500 flex items-center hover:bg-purple-700 text-white font-bold py-4 px-7 rounded-full">Police Car</button>
                <button onClick={() => handleToysCategory('Fire Truck')} className="bg-amber-500 flex items-center hover:bg-amber-700 text-white font-bold py-4 px-7 rounded-full">Fire Truck</button>
            </div>

            <div className=' grid md:grid-cols-3 gap-10 mt-20 mb-12'>
                {
                    (filterCategory.length > 0 ? filterCategory : categoryToys).map(categoryToy => <CategoryCart
                        key={categoryToy._id}
                        categoryToy={categoryToy}
                    ></CategoryCart>)
                }
            </div>
        </div>
    );
};

export default ShopByCategory;