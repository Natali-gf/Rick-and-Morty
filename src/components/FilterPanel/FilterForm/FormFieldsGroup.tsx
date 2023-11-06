import React from 'react';
import cn from 'classnames';
import { FieldValues, UseFormRegister, UseFormUnregister } from 'react-hook-form';
import { IFormField } from '../../../interfaces/formField';
import { BaseInput } from '../../ui/Input/Input';
import s from './style.module.scss';

type Props = {
	fields: IFormField[],
	register: UseFormRegister<FieldValues>,
	unregister: UseFormUnregister<FieldValues>
	className?: string,
}

function FormFieldsGroup(props: Props): JSX.Element {

	return (
		<div className={cn(props.className, s.formFieldsGroup)}>
			{props.fields.map((item, index) => (
				<BaseInput key={index}
					type={item.type}
					placeholder={item.placeholder}
					name={item.name}
					register={props.register}
					unregister={props.unregister}
				/>
			))}
		</div>
	);
}

export default FormFieldsGroup;