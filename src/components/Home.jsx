import React, { useContext } from 'react';
import { QuizContext } from '../layout/Root';
import Item from './Item';

const Home = () => {
    const productData = useContext(QuizContext);
    console.log(productData.data);
    const products = productData.data;
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
                    <div className="flex flex-col justify-center">
                        <div className="max-w-xl mb-6">
                            <div>
                                <p className="text-4xl inline-block px-3 py-px mb-4 font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                                    OverView
                                </p>
                            </div>
                            
                            <p className="text-base text-gray-700 md:text-lg">
                                This site only mede for quiz of different sector, such as Javascript, React Js, Github
                                etc. Get the challenge and do your best mark in this site. 
                            </p>
                        </div>
                        
                    </div>
                    <div className="relative">
                        <svg
                            className="absolute w-full text-teal-400"
                            fill="currentColor"
                            viewBox="0 0 600 392"
                        >
                            <rect x="0" y="211" width="75" height="181" rx="8" />
                            <rect x="525" y="260" width="75" height="132" rx="8" />
                            <rect x="105" y="83" width="75" height="309" rx="8" />
                            <rect x="210" y="155" width="75" height="237" rx="8" />
                            <rect x="420" y="129" width="75" height="263" rx="8" />
                            <rect x="315" y="0" width="75" height="392" rx="8" />
                        </svg>
                        <svg
                            className="relative w-full text-purple-800"
                            fill="currentColor"
                            viewBox="0 0 600 392"
                        >
                            <rect x="0" y="311" width="75" height="81" rx="8" />
                            <rect x="525" y="351" width="75" height="41" rx="8" />
                            <rect x="105" y="176" width="75" height="216" rx="8" />
                            <rect x="210" y="237" width="75" height="155" rx="8" />
                            <rect x="420" y="205" width="75" height="187" rx="8" />
                            <rect x="315" y="83" width="75" height="309" rx="8" />
                        </svg>
                    </div>
                </div>
            </div>

                
            
            <div className='gap-10 lg:ml-48 m-10 '>
                {
                    products.map(product => <Item
                    key={product.id}
                    product={product}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Home;