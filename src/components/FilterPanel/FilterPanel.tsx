import React from 'react';
import cn from 'classnames';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { Checkbox, ConfigProvider } from 'antd';
import { characterFormFields, episodeFormFields, locationFormFields } from '../../data/formFields';
import { IFormField } from '../../interfaces/formField';
import Button from '../ui/Button/Button';
import s from './style.module.scss';
import FilterForm from './FilterForm/FilterForm';


export type FilterOptions = {
	name: string,
	options: IFormField[] | []
}

const filterBy = ['Character', 'Location', 'Episodes'];

function FilterPanel(): JSX.Element {
	const [ filterOptions, setFilterOptions ] = React.useState<FilterOptions[] | []>([]);
	const [ checkedFilter, setCheckedFilter ] = React.useState<CheckboxValueType[]>([]);
	const [ filtersArea, showFiltersArea ] = React.useState<boolean>(false);
	const [ filters, showFilters ] = React.useState<boolean>(false);

	function chooseFilterOptions(value: CheckboxValueType[]) {
		const options: FilterOptions[] = value.map(
			(item: CheckboxValueType): FilterOptions => {
				return {
					name: item.toString(),
					options: item === 'Character'
							? characterFormFields : item === 'Location'
							? locationFormFields : item === 'Episodes'
							? episodeFormFields : [],
				};
			}
		);

		setCheckedFilter(value);
		setFilterOptions(options);
	}

	return (
		<div className={s.filterPanel}>
			<Button className={s.filterPanel__button}
					children={'Filter'}
					onClick={() => showFilters(!filters)} />
			{filtersArea
				&& <div className={s.filterPanel__background}
					 onClick={() => showFiltersArea(!filtersArea)}/>
			}
			{filters && <>
				<div className={cn(s.filterPanel__select, s.select)}>
					<div className={s.select__title}
						onClick={() => showFiltersArea(!filtersArea)}>Select Item</div>
					{filtersArea
						&& <ConfigProvider
							theme={{ token: {
								colorBorder: '#00000042',
								lineWidth: 2,
								controlInteractiveSize: 20,
								borderRadiusSM: 2,
							}}}>
							<Checkbox.Group className={s.select__group}
											options={filterBy}
											onChange={chooseFilterOptions}
											defaultValue={checkedFilter}
							/>
						</ConfigProvider>
					}
				</div>
				<FilterForm filterOptions={filterOptions}
							showfilterFields={filtersArea} />
			</>}
		</div>
	);
}

export default FilterPanel;