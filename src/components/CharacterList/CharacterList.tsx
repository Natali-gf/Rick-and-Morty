import React from 'react';
import { Alert, ConfigProvider, Pagination, Spin } from 'antd';
import { ICharacter } from '../../interfaces/character';
import { fetchCharacters } from '../../store/slices/charactersSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';
import { Status } from '../../enum/status';
import CharacterCard from '../CharacterCard/CharacterCard';
import s from './style.module.scss';

function CharacterList(): JSX.Element {
	const dispatch = useAppDispatch();
	const { characters,
			characterCount,
			status,
			error } = useAppSelector((state: RootState) => state.characters);
	const [ page, setPage ] = React.useState(1);
	const pageSize = 20;
	const startIndex = (page - 1) * pageSize;
	const endIndex = page * pageSize;
	const charactersToShow = characters.slice(startIndex, endIndex);

	React.useEffect(() => {
		dispatch(fetchCharacters({ variables: { page: page, character: true } }));
	}, []);

	return (
		<section className={s.characters}>
			{status === Status.Loading &&
				<Spin size="large" className={s.wrapper__content_spin}/>}
			{status === Status.Resolved &&
				<div className={s.characters__list}>
					{charactersToShow.map((item: ICharacter, index: number) => (
						<CharacterCard
							key={`key${item.id}_${index}`}
							characterData={item}
							isDetailVisible={false}/>
					))}
				</div>}
			{status === Status.Rejected &&
				<Alert message={'Error!'}
						 description={error}
						 type={'error'}
						 closable
				/>}
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: '#202329',
						colorPrimaryHover:'#272B33',
						borderRadius: 4,
						colorBgContainer: '#F5F5F5',
						colorText: '#F5F5F5',
						colorTextDisabled:'#272b3399',
						colorBgContainerDisabled:'#3C3E44',
						lineType: 'none',
					},
				}}>
				<Pagination className={s.characters__pagination}
					defaultCurrent={1}
					total={characterCount}
					pageSize={pageSize}
					showSizeChanger={false}
					showQuickJumper={false}
					current={page}
					onChange={setPage}
				/>
			</ConfigProvider>
		</section>
	);
}

export default CharacterList;