import React from 'react';
import cn from 'classnames';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CharacterList from '../../components/CharacterList/CharacterList';
import AdditionalMenu from '../../components/AdditionalMenu/AdditionalMenu';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import s from './style.module.scss';

function HomePage(): JSX.Element {

	return (
		<div className={s.wrapper}>
			<Header />
			<div className={s.wrapper__content}>
				<FilterPanel />
				<CharacterList />
				<AdditionalMenu />
			</div>
			<Footer />
		</div>
	);
}

export default HomePage;