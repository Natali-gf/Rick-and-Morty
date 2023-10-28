import React from 'react';
import cn from 'classnames';
import s from './style.module.scss';

function Footer(): JSX.Element {
	return (
		<footer className={s.footer}>
			<div className={s.footer__description}>
				performed as part of a test case for the company
			</div>
			<div className={s.footer__logo}></div>
			<ul className={cn(s.footer__socials, s.socials)}>
				<li>
					<a className={cn(s.socials__link, s.socials__link_github)}
					   href={'https://github.com/'}
					   target={'_blank'}
					/>
				</li>
				<li>
					<a className={cn(s.socials__link, s.socials__link_twitter)}
					   href='https://twitter.com/'
					   target={'_blank'}
					/>
				</li>
				<li>
					<a className={cn(s.socials__link, s.socials__link_heart)}
					   href={''}
					   target={'_blank'}
					/>
				</li>
			</ul>
			<div className={s.footer__year}>2023</div>
		</footer>
	);
}

export default Footer;
