import Header from '../components/Header';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import PostPage from '../components/PostPage';
import Nav from '../components/Nav';

export default function Post() {
	return (
		<div className="flex flex-col w-full h-screen bg-white mx-auto">
			<div className="flex h-[50px] w-full bg-blue-600 text-white">
				<Header title="Next JS Blog" />
			</div>
			<div className="flex h-[80px] w-full bg-blue-100 text-blue-600  mx-auto">
				<Nav />
			</div>
			<div className="flex grow w-full items-center justify-center bg-white">
				<PostPage />
			</div>
			<div
				className="flex w-full h-[40px] bg-blue-600 text-white
      "
			>
				<Footer />
			</div>
		</div>
	);
}
