import cn from 'classnames';
import s from './style.module.scss';

type Props = {
	className: string,
	onClick?: () => void,
	children?: string,
	disabled?: boolean,
}

function Button(props: Props): JSX.Element {

	return (
		<button
			className={cn(props.className, s.button)}
			children={props.children}
			onClick={props.onClick}
			disabled={props.disabled}
		/>
	)
}

export default Button;