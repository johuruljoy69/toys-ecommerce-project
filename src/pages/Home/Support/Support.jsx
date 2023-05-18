import React from 'react';
import { FiSmile } from 'react-icons/fi';
import { BiMoneyWithdraw } from 'react-icons/bi';
import { MdSupportAgent } from 'react-icons/md';
import { TbDiscount } from 'react-icons/tb';

const Support = () => {
    return (        
            <div className="border bg-orange-100 md:flex justify-center items-center">

                <div className="stat text-center">
                    <div className="flex justify-center">
                        <FiSmile size={'5em'} />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>100% Satisfaction</h2>
                        <p>If You Are Unable</p>
                    </div>
                </div>

                <div className="stat text-center">
                    <div className="flex justify-center">
                        <MdSupportAgent size={'5em'} />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Online Support</h2>
                        <p>Any Time Support</p>
                    </div>
                </div>

                <div className="stat text-center">
                    <div className="flex justify-center">
                        <BiMoneyWithdraw size={'5em'} />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Money Returns</h2>
                        <p>Guarantee In 7 Days</p>
                    </div>
                </div>

                <div className="stat text-center">
                    <div className="flex justify-center">
                        <TbDiscount size={'5em'} />
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Member Discount</h2>
                        <p>Customers First Order</p>
                    </div>
                </div>

            </div>
        
    );
};

export default Support;