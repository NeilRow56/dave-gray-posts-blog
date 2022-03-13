import React from 'react';
import Link from 'next/link';

const Nav = ({ search, setSearch }) => {
	return (
		<nav className="flex flex-row justify-between w-full  mx-auto bg-blue-100">
			<div className="flex">
				<form
					className="form-group mb-6 pl-2 sm:pl-20 md:pl-[100px] lg:pl-[300px]"
					onSubmit={(e) => e.preventDefault()}
				>
					<label htmlFor="search" className="text-[25px]">
						Search{' '}
					</label>
					<input
						className="form-control
				block
				w-full
				px-3
				py-1.5
				text-base
				font-normal
				text-gray-700
				bg-white bg-clip-padding
				border border-solid border-gray-300
				rounded
				transition
				ease-in-out
				m-0
				focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
						type="text"
						id="search"
						placeholder="Search Posts"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</form>
			</div>
			<div className="flex pr-2 sm:pr-20 md:pr-[100px] lg:pr-[300px]">
				<ul className="flex flex-row">
					<li className="mx-1 sm:mx-5 mt-5 text-[15px] sm:text-[25px]">
						<Link href="/">
							<a> Home </a>
						</Link>
					</li>
					<li className="mx-1 sm:mx-5 mt-5 text-[15px] sm:text-[25px]">
						<Link href="/about">
							<a> About </a>
						</Link>
					</li>
					<li className="mx-1 sm:mx-5 mt-5 text-[15px] sm:text-[25px]">
						<Link href="/post">
							<a> Post </a>
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
