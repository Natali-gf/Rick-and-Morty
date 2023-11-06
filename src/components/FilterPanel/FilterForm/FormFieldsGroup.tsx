import React from 'react';
import cn from 'classnames';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { IFormField } from '../../../interfaces/formField';
import { BaseInput } from '../../ui/Input/Input';
import s from './style.module.scss';

type Props = {
	fields: IFormField[],
	register: UseFormRegister<FieldValues>,
	className?: string,
}

function FormFieldsGroup(props: Props): JSX.Element {

	React.useEffect(() => {

	}, []);

	return (
		<div className={cn(props.className, s.formFieldsGroup)}>
			{props.fields.map((item, index) => (
				<BaseInput key={index}
					type={item.type}
					placeholder={item.placeholder}
					name={item.name}
					register={props.register}
				/>
			))}
		</div>
	);
}

export default FormFieldsGroup;