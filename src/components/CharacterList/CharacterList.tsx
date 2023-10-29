import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Character } from '../../interfaces/character';
import { fetchCharacters } from '../../store/slices/charactersSlice';
import { useAppDispatch } from '../../store/hooks';
import { RootState } from '../../store/store';
import CharacterCard from '../CharacterCard/CharacterCard';
import s from './style.module.scss';

function CharacterList(): JSX.Element {
	const dispatch = useAppDispatch();
	const { characters } = useSelector((state: RootState) => state.characters);

	React.useEffect(() => {
		dispatch(fetchCharacters())
	}, [])

	return (
		<section className={s.characterList}>
			{characters.map((item: Character) => (
				<CharacterCard
					key={item.id}
					characterData={item}/>
			))}
		</section>
	);
}

export default CharacterList;