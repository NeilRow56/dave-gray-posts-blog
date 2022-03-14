import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = ({ search, setSearch }) => {
	const router = useRouter();

	let Links = [
		{ name: 'Home', link: '/' },
		{ name: 'About', link: '/about' },
		{ name: 'Blog Post', link: '/post' },
	];
	return (
		<div className=" flex flex-col md:flex-row w-full h-[40px] items-center bg-blue-100">
			<div className="flex flex-row text-center w-full  py-[1px] bg-red-100">
				<label htmlFor="search" className="md:text-[20px] ml-2">
					Search{' '}
				</label>
				<form
					className="form-group flex-row  pl-2 sm:pl-5 "
					onSubmit={(e) => e.preventDefault()}
				>
					<input
						className="form-control
				block
				w-[250px] md:w-[325px]
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
			<div className="flex text-center flex-col w-full bg-green-100">
				<ul className="flex flex-row pt-1 pb-1 justify-center  mr-3 ml-3   2xl:mr-[100px]">
					{Links.map((link) => (
						<li key={link.name}>
							<Link href={link.link}>
								<a
									className={`cursor-pointer md:text-2xl mr-5 xl:mr-24 ${
										router.pathname === link.link
											? 'text-[#cc0000] hover:text-gray-500'
											: 'text-blue-400 hover:text-gray-500'
									}`}
								>
									{link.name}
								</a>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
