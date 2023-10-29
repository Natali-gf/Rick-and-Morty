import s from './style.module.scss';

const title: string = 'The Rick and Morty API';

function MainTitle(): JSX.Element {

	return (
		<div className={s.mainBlock__background}>
			<h1 className={s.mainBlock__title}>{title}</h1>
		</div>
	);
}

export default MainTitle;