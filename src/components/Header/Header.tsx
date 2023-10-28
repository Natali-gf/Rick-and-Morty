import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import s from './style.module.scss';

const title: string = 'The Rick and Morty API';

function Header(): JSX.Element {

	return (
		<header className={s.header}>
			<Link className={s.header__logo}
				  to={'./'}
			/>
			<div className={s.header__background}>
				<h1 className={s.header__title}>{title}</h1>
			</div>
		</header>
	);
}

export default Header;