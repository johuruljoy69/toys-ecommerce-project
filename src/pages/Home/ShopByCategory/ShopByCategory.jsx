import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopByCategory = () => {
    return (
        <div className='text-center mt-12 mb-12'>
            <h2 className='text-5xl font-bold mb-6'>Shop By Category</h2>
            <p className='mb-6'>Our Collections</p>
            <Tabs>
                <TabList className='text-xl font-semibold'>
                    <Tab>Sports Car</Tab>
                    <Tab>Mini Police Car</Tab>
                    <Tab>Mini Fire Truck</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;