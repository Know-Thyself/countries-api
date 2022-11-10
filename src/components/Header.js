const Header = ({ theme, setTheme }) => {
	const switchTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	};
	return (
		<header className='App-header'>
			<h4 className='header-text'>Where in the world?</h4>
			<button onClick={switchTheme} className='switch-theme'>
				{theme === 'light' ? (
					<i className='fa-regular fa-moon'></i>
				) : (
					<i className='fa-solid fa-moon'>&nbsp;</i>
				)}
				Dark Mode
			</button>
		</header>
	);
};

export default Header;
