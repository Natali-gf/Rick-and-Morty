import React from 'react';
import cn from 'classnames';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import { characterFormFields, episodeFormFields, locationFormFields } from '../../data/formFields';
import { IFormField } from '../../interfaces/formField';
import Button from '../ui/Button/Button';
import s from './style.module.scss';
import FilterForm from './FilterForm/FilterForm';
import { Checkbox, ConfigProvider } from 'antd';


export type FilterOptions = {
	name: string,
	options: IFormField[] | []
}

const filterBy = ['Character', 'Location', 'Episodes'];

function FilterPanel(): JSX.Element {
	const [ filterOptions, setFilterOptions ] = React.useState<FilterOptions[] | []>([]);
	const [ filtersArea, showFiltersArea ] = React.useState<boolean>(false);
	const [ filters, showFilters ] = React.useState<boolean>(false);

	React.useEffect(() => {
		if(!filtersArea){
			setFilterOptions([])
		}
	}, [filtersArea]);

	function chooseFilterOptions(value: CheckboxValueType[]) {
		if(value.length === 0) {
			setFilterOptions([]);
			return;
		}

		const options: FilterOptions[] = value.map(
			(item: CheckboxValueType): FilterOptions => {
				return {
					name: item.toString(),
					options: item === 'Character'
							? characterFormFields : item === 'Location'
							? locationFormFields : item === 'Episodes'
							? episodeFormFields : []
				}
			}
		);

		setFilterOptions(options);
	}

	return (
		<div className={s.filterPanel}>
			<Button className={s.filterPanel__button}
					children={'Filter'}
					onClick={() => showFilters(!filters)} />
			{filtersArea &&
				<div className={s.filterPanel__background}
					 onClick={() => showFiltersArea(!filtersArea)}/>
			}
			{filters && <>
				<div className={cn(s.filterPanel__select, s.select)}>
					<div className={s.select__title}
						onClick={() => showFiltersArea(!filtersArea)}>Select Item</div>
					{filtersArea &&
						<ConfigProvider
							theme={{ token: {
								colorBorder: '#00000042',
								lineWidth: 2,
								controlInteractiveSize: 20,
								borderRadiusSM: 2,
							}}}>
							<Checkbox.Group className={s.select__group}
											options={filterBy}
											onChange={chooseFilterOptions}
							/>
						</ConfigProvider>
					}
				</div>
				<FilterForm filterOptions={filterOptions} />
			</>}
		</div>
	);
}

export default FilterPanel;