import Header from '../components/Header';
import { useEffect, useState } from 'react';
import Footer from '../components/Footer';

export default function Index() {
	return (
		<div className="flex flex-col w-full h-screen bg-green-100 mx-auto">
			<div className="flex h-[50px] bg-blue-600 text-white">
				<Header title="Header Title" />
			</div>
			<div className="flex grow items-center justify-center bg-white">
				Text Center
			</div>
			<div
				className="flex h-[40px] bg-blue-600 text-white
      "
			>
				<Footer />
			</div>
		</div>
	);
}
