import React from 'react';
import { useNavigate, Link, useLoaderData } from "react-router-dom";

const Item = ({ product }) => {
    const {id, logo, name} = product;


    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
            <img src={logo} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-slate-400" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
                    <p className="dark:text-gray-100">Curabitur luctus erat nunc, sed ullamcorper erat vestibulum eget.</p>
                </div>
                <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900 hover:bg-violet-600">
                    <Link to={`/home/${id}`}>Quiz Test</Link>
                    
                </button>
            </div>
        </div>
    );
};

export default Item;