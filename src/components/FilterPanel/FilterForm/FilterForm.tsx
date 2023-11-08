import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../store/hooks';
import { fetchCharacters } from '../../../store/slices/charactersSlice';
import Button from '../../ui/Button/Button';
import { BaseInput } from '../../ui/Input/Input';
import { FilterOptions } from '../FilterPanel';
import { HistoryAction } from '../../../enum/history';
import { IHistorySearching } from '../../../interfaces/history';
import { saveFilterValues } from '../../../store/slices/filtersSlice';
import FormFieldsGroup from './FormFieldsGroup';
import s from './style.module.scss';

type Props = {
	filterOptions: FilterOptions[],
	showfilterFields: boolean,
	showFiltersArea: React.Dispatch<React.SetStateAction<boolean>>
}

function FilterForm(props: Props): JSX.Element {
	const dispatch = useAppDispatch();
	const { register,
			unregister,
			handleSubmit,
			formState: {isDirty} } = useForm({ mode: 'all' });

	const onSubmit = async(data: any) => {
		const dictFields: IHistorySearching[] = [];
		const variables: {[key:string]: string | boolean} = {};
		let checkTypeFilter: string = '';

		for(const key in data) {
			if(data[key] !== '') {
				variables[key] = data[key];

				const words: string[] = key.split(/(?=[A-Z])/);

				if(checkTypeFilter === '' || checkTypeFilter !== words[0]) {
					checkTypeFilter = words[0];

					variables[words[0]] = true;

					dictFields.push({
						type: HistoryAction.Searching,
						filterName: words[0].charAt(0).toUpperCase() + words[0].slice(1),
						filterFields: [
							{
								field: words[1],
								value: data[key],
							},
						],
					});
				} else {
					dictFields[dictFields.length - 1].filterFields.push({
						field: words[1],
						value: data[key],
					});
				}
			}
		}
		if(!dictFields.length) variables.character = true;

		dispatch(fetchCharacters({
			variables: {
				page: 1,
				...variables,
		}}));
		dispatch(saveFilterValues({
			variables: {
				page: 1,
				...variables,
		}}));
		props.showFiltersArea(false);

		if(localStorage.historyActions) {
			const newArray = [...JSON.parse(localStorage.historyActions), ...dictFields];

			localStorage.setItem('historyActions', JSON.stringify(newArray));
		} else {
			localStorage.setItem('historyActions', JSON.stringify(dictFields));
		}
	};

	return (
		<form className={s.filterForm}
		   	  onSubmit={handleSubmit(onSubmit)}>
			{!props.showfilterFields
				? <BaseInput
					className={s.filterForm__field}
					name={'characterName'}
					type={'text'}
					placeholder={'Add key words to find'}
					register={register}
					unregister={unregister}
				  />
				: <div className={s.filterForm__fields}>
					{props.filterOptions.map(
						(item: FilterOptions, index: number): JSX.Element => (
							<div className={s.group} key={index}>
								<div className={s.group__name}>{item.name}</div>
								<FormFieldsGroup
									className={s.group__fields}
									fields={item.options}
									register={register}
									unregister={unregister}
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