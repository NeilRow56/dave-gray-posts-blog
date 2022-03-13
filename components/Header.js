import React from 'react';

const Header = ({ title }) => {
	return (
		<header className="flex mx-auto w-auto items-center">
			<h1 className="text-2xl font-bold">{title}</h1>
		</header>
	);
};

Header.defaultProps = {
	title: 'Default Title',
};
export default Header;
