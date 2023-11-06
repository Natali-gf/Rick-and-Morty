import React from 'react';
import cn from 'classnames';
import { useForm } from 'react-hook-form';
import { saveFilterValues } from '../../../store/slices/filtersSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchCharacters } from '../../../store/slices/charactersSlice';
import Button from '../../ui/Button/Button';
import { BaseInput } from '../../ui/Input/Input';
import { FilterOptions } from '../FilterPanel';
import FormFieldsGroup from './FormFieldsGroup';
import s from './style.module.scss';

type Props = {
	filterOptions: FilterOptions[],
}


function FilterForm(props: Props): JSX.Element {
	const dispatch = useAppDispatch();
	const {character} = useAppSelector(state => state.filters)
	const { register, handleSubmit, formState: {isDirty} } = useForm({ mode: 'all' });

// 	React.useEffect(() => {

// 	}, []);

	const onSubmit = async(data: any) => {

		dispatch(fetchCharacters({
			page: 1,
			variables: {
				characterName: data.characterName,
				characterGender: data.characterGender,
				characterSpecies: data.characterSpecies,
				characterStatus: data.characterStatus,
				characterType: data.characterType,

				episodeEpisodes: data.episodeEpisodes,
				episodeName: data.episodeName,

				locationDimension: data.locationDimension,
				locationName: data.locationName,
				locationType: data.locationType,

				hasFilterCharacter: true,
				hasFilterLocation: false,
				hasFilterEpisode: false

		}}));

		dispatch(saveFilterValues({character: {
			name: data.characterName,
			status: data.characterStatus,
			species: data.characterSpecies,
			type: data.characterType,
			gender: data.characterGender,
		}}));
	};

	return (
		<form className={s.filterForm}
		   	  onSubmit={handleSubmit(onSubmit)}>
			{props.filterOptions.length === 0
				? <BaseInput className={s.filterForm__field}
							 name={'keyWord'}
							 type={'text'}
							 placeholder={'Add key words to find'}
							 register={register}
				  />
				: <div className={s.filterForm__fields}>
					{props.filterOptions.map(
						(item: FilterOptions, index: number): JSX.Element => (
							<div className={s.group} key={index}>
								<div className={s.group__name}>{item.name}</div>
								<FormFieldsGroup className={s.group__fields}
												 fields={item.options}
												 register={register}
								/>
							</div>
						)
					)}
				</div>
			}
			<Button className={s.filterForm__button}
					children={'Find'}
					disabled={!isDirty}
			/>
		</form>
	);
}

export default FilterForm;