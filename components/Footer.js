import React from 'react';

const Footer = () => {
	const today = new Date();
	return (
		<footer className="flex mx-auto w-auto items-center">
			<p className="text-sm">
				{' '}
				Copyright AWP Coding &copy; {today.getFullYear()}
			</p>
		</footer>
	);
};

export default Footer;
