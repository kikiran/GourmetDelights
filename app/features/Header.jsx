"use client";
import React, { useState } from "react";
import { IoMdRestaurant } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
	return (
		<header className="bg-white shadow-md">
			<nav className="container mx-auto px-6 py-3 flex justify-between items-center">
				<div className="flex items-center">
					<IoMdRestaurant className="text-3xl text-red-500 mr-2" />
					<span className="text-xl font-semibold text-gray-800">
						Gourmet Delights
					</span>
				</div>
				<ul className="flex flex-row justify-between items-center gap-6">
					<li>Home</li>
					<li>Menu</li>
					<li>Contact Us</li>
				</ul>
				<ul className="flex flex-row justify-between items-center gap-6">
					<li>
						<input type="search" placeholder="search..." />
					</li>
					<li>
						<FaShoppingCart />
					</li>
					<li>
						<button
							// onClick={() => setShowSignUp(false)}
							className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
						>
							Login
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
