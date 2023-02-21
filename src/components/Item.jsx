import React from 'react';
import { useNavigate, Link, useLoaderData } from "react-router-dom";

const Item = ({ product }) => {
    const {id, logo, name} = product;


    return (
<div className=" container p-4 py-4 py-2 bg-violet-400 lg:w-8/12 hover:w-9/12 duration-500 ease-in lg:ml-36 text-gray-900 mb-6 rounded-md">
			<div className="">
				<div className="flex flex-col lg:flex-row items-center justify-between">
					<img className="text-center md:h-48 bg-zinc-500 rounded-md" src={logo} alt="" />


					<div className="space-x-2 text-center py-2 lg:py-0">

						<span className="font-bold text-lg">Topic Name: {name}</span>

					</div>
					<Link to={`/home/${id}`} rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 w-56 rounded-md border block bg-gray-50 text-gray-900 border-gray-400">Quiz Test</Link>
				</div>
			</div>
		</div>



       
    );
};

export default Item;