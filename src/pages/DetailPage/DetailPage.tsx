import React from 'react';
import { Alert, Spin } from 'antd';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { Status } from '../../enum/status';
import { fetchCharacterById } from '../../store/slices/charactersSlice';
import Header from '../../components/Header/Header';
import MainTitle from '../../components/MainTitle/MainTitle';
import AdditionalMenu from '../../components/AdditionalMenu/AdditionalMenu';
import Footer from '../../components/Footer/Footer';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import s from './style.module.scss';

function DetailPage(): JSX.Element {
	const dispatch = useAppDispatch();
	const { currentCharacterData, currentCharacterId, status, error } = useAppSelector((state: RootState) => state.characters);

	React.useEffect(() => {
		dispatch(fetchCharacterById(currentCharacterId));
	}, []);

	return (
		<div className={s.wrapper}>
			<Header />
			<main className={s.wrapper__content}>
				<MainTitle />
				<div className={s.character}>
				{status === Status.Loading
					? <Spin size="large" className={s.wrapper__content_spin}/>
					: status === Status.Resolved
					? <CharacterCard characterData={currentCharacterData!}
									 isDetailVisible={true} />
					: <Alert message={'Error!'}
							 description={error}
						 	 type={'error'}
							 closable
					  />
				}
				</div>
				<AdditionalMenu />
			</main>
			<Footer />
		</div>
	);
}

export default DetailPage;