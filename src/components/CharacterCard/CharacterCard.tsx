import { Link } from 'react-router-dom';
import cn from 'classnames';
import s from './style.module.scss';
import { Character } from '../../interfaces/character';
import { CharacterStatus } from '../../enum/characterStatus';

type Props ={
	characterData: Character
}

function CharacterCard({characterData}: Props): JSX.Element {
	const classStatus = characterData.status === CharacterStatus.Alive
						? s.info__status_alive
						: characterData.status === CharacterStatus.Dead
						? s.info__status_dead
						: s.info__status_unknown;

	return (
		<article className={s.characterCard}>
			<div className={s.characterCard__image}>
				<img src={characterData.image} alt={characterData.name} />
			</div>
			<div className={cn(s.characterCard__info, s.info)}>
				<div className={s.info__part}>
					<Link className={s.info__title}
						  to={'/detail'}>{characterData.name}</Link>
					<div className={s.info__status}>
						<div className={cn(s.info__status_dot, classStatus)}/>
						<span className={s.info__status_text}>
							{characterData.status} - {characterData.species}
						</span>
					</div>
				</div>
				<div className={s.info__part}>
					<div className={s.info__subtitle}>Last known location:</div>
					<div className={s.info__text}>{characterData.location.name}</div>
				</div>
				<div className={s.info__part}>
					<div className={s.info__subtitle}>First seen in:</div>
					<div className={s.info__text}>{characterData.episode[0].name}</div>
				</div>
			</div>
		</article>
	);
}

export default CharacterCard;