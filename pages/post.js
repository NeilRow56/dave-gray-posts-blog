import Header from '../components/Header';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import PostPage from '../components/PostPage';
import Navbar from '../components/Navbar';

export default function Post() {
	return (
		<div className="flex flex-col h-screen">
			<div className="flex h-[50px] w-full bg-blue-600 text-white">
				<Header title="Next JS Blog" />
			</div>
			<Navbar />
			<main className="flex flex-1 w-full items-center justify-center bg-geen-100">
				<PostPage />
			</main>
			<div
				className="flex w-full h-[40px] bg-blue-600 text-white
      "
			>
				<Footer />
			</div>
		</div>
	);
}
