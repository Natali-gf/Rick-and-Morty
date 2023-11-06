import { Link } from 'react-router-dom';
import cn from 'classnames';
import { ICharacter } from '../../interfaces/character';
import { CharacterStatus } from '../../enum/characterStatus';
import { useAppDispatch } from '../../store/hooks';
import { HistoryAction } from '../../enum/history';
import { IEpisode } from '../../interfaces/episode';
import { setCurrentCharacterId } from '../../store/slices/charactersSlice';
import s from './style.module.scss';

type Props ={
	characterData: ICharacter,
	isDetailVisible: boolean,
}

function CharacterCard({characterData, ...props}: Props): JSX.Element {
	const classStatus = characterData.status === CharacterStatus.Alive
						? s.info__status_alive
						: characterData.status === CharacterStatus.Dead
						? s.info__status_dead
						: s.info__status_unknown;

	const dispatch = useAppDispatch();

	function handleClick() {
		dispatch(setCurrentCharacterId(characterData.id));

		const addToHistory = [{
			type: HistoryAction.Viewing,
			characterName: characterData.name,
		}];

		if(localStorage.historyActions) {
			const newArray = [
				...JSON.parse(localStorage.historyActions), ...addToHistory,
			];

			localStorage.setItem('historyActions', JSON.stringify(newArray));
		} else {
			localStorage.setItem('historyActions', JSON.stringify(addToHistory));
		}
	}

	return (
		<article className={cn(s.characterCard,
							{[s.characterCard_fullsize]: props.isDetailVisible})}>
			<div className={s.characterCard__image}>
				<img src={characterData.image} alt={characterData.name} />
			</div>
			<div className={cn(s.characterCard__info, s.info,
							{[s.info_fullsize]: props.isDetailVisible})}>
				<div className={s.info__part}>
					<Link className={s.info__title}
						  to={'/detail'}
						  onClick={handleClick}>{characterData.name}</Link>
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
					<div className={s.info__text}>
						{characterData.episode[0].name}
					</div>
				</div>
				{props.isDetailVisible && <>
					<div className={s.info__part}>
						<div className={s.info__subtitle}>Origin location:</div>
						<div className={s.info__text}>
							{characterData.episode[0].name}
						</div>
					</div>
					<div className={cn(s.info__part, s.info__part_episodes)}>
						<div className={s.info__subtitle}>
							List of episodes in which this character appeared:
						</div>
						{characterData.episode.map(
							(item: IEpisode, index: number): JSX.Element => (
								<div className={s.info__text}
									 key={index}>
									<span>{item.name}</span>
								</div>
							)
						)}
					</div>
				</>}
			</div>
		</article>
	);
}

export default CharacterCard;