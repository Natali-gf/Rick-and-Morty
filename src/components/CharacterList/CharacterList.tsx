import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import s from './style.module.scss';
import { Character } from '../../interfaces/character';
import CharacterCard from '../CharacterCard/CharacterCard';

function CharacterList(): JSX.Element {
	const characterList: Character[] = [];

	return (
		<div className={s.characterList}>
			{characterList.map((item: Character) => (
				<CharacterCard characterData={item}/>
			))}
		</div>
	);
}

export default CharacterList;