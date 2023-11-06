import React from 'react';
import cn from 'classnames';
import { FieldValues, UseFormRegister, useForm } from 'react-hook-form';
// import Button from '../ui/Button/Button';
import s from './style.module.scss';

type BaseInputProps = {
	name: string,
	type: string,
	placeholder: string,
	register: UseFormRegister<FieldValues>,
	defaultValue?: string
	id?: string,
	autoComplete?: 'on' | 'off',
	className?: string,
	// onChange: () => void
}

export const BaseInput = (props: BaseInputProps) => {
	return (
		<div className={cn(s.inputField, props.className)}>
			<input className={cn(s.inputField__input)}
				type={props.type}
				placeholder={props.placeholder}
				defaultValue={props.defaultValue}
				// name={props.name}
				{...props.register(props.name)}
				// value={props.value ?? ''}
				// onChange={(e) => props.onChange(e.target.value)}
				id={props.name}
				autoComplete={props.autoComplete || 'off'}/>
		</div>
	)
}