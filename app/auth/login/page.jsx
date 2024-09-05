"use client";
import React, { useState } from "react";
import {
	FaUser,
	FaLock,
	FaEnvelope,
	FaArrowLeft,
	FaArrowRight,
} from "react-icons/fa";

const page = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [showSignUp, setShowSignUp] = useState(false);

	const handleLogin = (e) => {
		e.preventDefault();
		setIsLoggedIn(true);
	};

	const handleSignUp = (e) => {
		e.preventDefault();
		setIsLoggedIn(true);
	};

	const handleLogout = () => {
		setIsLoggedIn(false);
	};

	return (
		<main className="container mx-auto px-6 py-10 flex justify-center items-center">
			{!isLoggedIn && (
				<div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg ">
					{showSignUp ? (
						<form onSubmit={handleSignUp} className="p-8">
							<h2 className="text-2xl font-semibold text-center mb-6">
								Sign Up
							</h2>
							<div className="mb-4">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="name"
								>
									Name
								</label>
								<div className="flex items-center border rounded-md px-3 py-2">
									<FaUser className="text-gray-400 mr-2" />
									<input
										className="w-full focus:outline-none"
										id="name"
										type="text"
										placeholder="Enter your name"
										required
									/>
								</div>
							</div>
							<div className="mb-4">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="email"
								>
									Email
								</label>
								<div className="flex items-center border rounded-md px-3 py-2">
									<FaEnvelope className="text-gray-400 mr-2" />
									<input
										className="w-full focus:outline-none"
										id="email"
										type="email"
										placeholder="Enter your email"
										required
									/>
								</div>
							</div>
							<div className="mb-6">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="password"
								>
									Password
								</label>
								<div className="flex items-center border rounded-md px-3 py-2">
									<FaLock className="text-gray-400 mr-2" />
									<input
										className="w-full focus:outline-none"
										id="password"
										type="password"
										placeholder="Enter your password"
										required
									/>
								</div>
							</div>
							<button
								type="submit"
								className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
							>
								Sign Up
							</button>
							<p className="text-center mt-4 text-sm">
								Already have an account?{" "}
								<button
									type="button"
									onClick={() => setShowSignUp(false)}
									className="text-red-500 hover:text-red-600 focus:outline-none"
								>
									Login
								</button>
							</p>
						</form>
					) : (
						<form onSubmit={handleLogin} className="p-8">
							<h2 className="text-2xl font-semibold text-center mb-6">
								Login
							</h2>
							<div className="mb-4">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="email"
								>
									Email
								</label>
								<div className="flex items-center border rounded-md px-3 py-2">
									<FaEnvelope className="text-gray-400 mr-2" />
									<input
										className="w-full focus:outline-none"
										id="email"
										type="email"
										placeholder="Enter your email"
										required
									/>
								</div>
							</div>
							<div className="mb-6">
								<label
									className="block text-gray-700 text-sm font-bold mb-2"
									htmlFor="password"
								>
									Password
								</label>
								<div className="flex items-center border rounded-md px-3 py-2">
									<FaLock className="text-gray-400 mr-2" />
									<input
										className="w-full focus:outline-none"
										id="password"
										type="password"
										placeholder="Enter your password"
										required
									/>
								</div>
							</div>
							<button
								type="submit"
								className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
							>
								Login
							</button>
							<p className="text-center mt-4 text-sm">
								Don't have an account?{" "}
								<button
									type="button"
									onClick={() => setShowSignUp(true)}
									className="text-red-500 hover:text-red-600 focus:outline-none"
								>
									Sign Up
								</button>
							</p>
						</form>
					)}
				</div>
			)}

			{isLoggedIn && (
				<>
					<section className="mb-12">
						<h2 className="text-3xl font-semibold text-gray-800 mb-6">
							Featured Items
						</h2>
						<div className="relative">
							<div className="overflow-hidden rounded-lg shadow-lg">
								{featuredItems.map((item, index) => (
									<div
										key={item.id}
										className={`${
											index === currentSlide
												? "block"
												: "hidden"
										} transition-opacity duration-500 ease-in-out`}
									>
										<img
											src={item.image}
											alt={item.name}
											className="w-full h-96 object-cover"
										/>
										<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
											<h3 className="text-xl font-semibold mb-2">
												{item.name}
											</h3>
											<p>{item.description}</p>
										</div>
									</div>
								))}
							</div>
							<button
								onClick={prevSlide}
								className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
								aria-label="Previous slide"
							>
								<FaArrowLeft className="text-red-500" />
							</button>
							<button
								onClick={nextSlide}
								className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
								aria-label="Next slide"
							>
								<FaArrowRight className="text-red-500" />
							</button>
						</div>
					</section>

					<section>
						<h2 className="text-3xl font-semibold text-gray-800 mb-6">
							Menu Categories
						</h2>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
							{menuCategories.map((category) => (
								<div
									key={category.id}
									className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
								>
									<img
										src={category.image}
										alt={category.name}
										className="w-full h-48 object-cover"
									/>
									<div className="p-4">
										<h3 className="text-xl font-semibold text-gray-800">
											{category.name}
										</h3>
									</div>
								</div>
							))}
						</div>
					</section>
				</>
			)}
		</main>
	);
};

export default page;
