import cn from 'classnames';
import { FieldValues, UseFormRegister } from 'react-hook-form';
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
}

export const BaseInput = (props: BaseInputProps) => {
	return (
		<div className={cn(s.inputField, props.className)}>
			<input className={cn(s.inputField__input)}
				type={props.type}
				placeholder={props.placeholder}
				defaultValue={props.defaultValue}
				{...props.register(props.name)}
				id={props.name}
				autoComplete={props.autoComplete || 'off'}/>
		</div>
	);
};