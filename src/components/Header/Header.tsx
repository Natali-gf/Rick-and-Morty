import { Link } from 'react-router-dom';
import s from './style.module.scss';

function Header(): JSX.Element {

	return (
		<header className={s.header}>
			<nav className={s.header__nav}>
				<Link className={s.header__logo}
					to={'./'}
				/>
			</nav>
		</header>
	);
}

export default Header;