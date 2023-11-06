import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CharacterList from '../../components/CharacterList/CharacterList';
import AdditionalMenu from '../../components/AdditionalMenu/AdditionalMenu';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import MainTitle from '../../components/MainTitle/MainTitle';
import s from './style.module.scss';

function HomePage(): JSX.Element {

	return (
		<div className={s.wrapper}>
			<Header />
			<main className={s.wrapper__content}>
				<MainTitle />
				<FilterPanel />
				<CharacterList />
				<AdditionalMenu />
			</main>
			<Footer />
		</div>
	);
}

export default HomePage;