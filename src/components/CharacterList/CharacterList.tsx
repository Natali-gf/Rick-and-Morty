import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { Pagination } from 'antd';
import { Character } from '../../interfaces/character';
import { fetchCharacters } from '../../store/slices/charactersSlice';
import { useAppDispatch } from '../../store/hooks';
import { RootState } from '../../store/store';
import CharacterCard from '../CharacterCard/CharacterCard';
import s from './style.module.scss';


function CharacterList(): JSX.Element {
	const dispatch = useAppDispatch();
	const { characters, characterCount } = useSelector((state: RootState) => state.characters);
	const [ page, setPage ] = React.useState(1)

	React.useEffect(() => {
		dispatch(fetchCharacters(page))
	}, [page]);

	return (
		<section className={s.characters}>
			<div className={s.characters__list}>
				{characters.map((item: Character) => (
					<CharacterCard
						key={item.id}
						characterData={item}/>
				))}
			</div>
			<Pagination className={s.characters__pagination}
				defaultCurrent={1}
				total={characterCount}
				// defaultPageSize={6}//?? по 6 карточек или 3 ряда?
				// responsive={true}
				showSizeChanger={false}
				showQuickJumper={false}
				current={page}
				onChange={setPage}
			/>
		</section>
	);
}

export default CharacterList;