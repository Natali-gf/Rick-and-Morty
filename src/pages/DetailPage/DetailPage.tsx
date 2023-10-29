import React from 'react';
import cn from 'classnames';
import Header from '../../components/Header/Header';
import MainTitle from '../../components/MainTitle/MainTitle';
import CharacterDetails from '../../components/CharacterDetails/CharacterDetail';
import AdditionalMenu from '../../components/AdditionalMenu/AdditionalMenu';
import Footer from '../../components/Footer/Footer';
import s from './style.module.scss';

function DetailPage(): JSX.Element {

	return (
		<div className={s.wrapper}>
			<Header />
			<main className={s.wrapper__content}>
				<MainTitle />
				<CharacterDetails />
				<AdditionalMenu />
			</main>
			<Footer />
		</div>
	);
}

export default DetailPage;