import React from 'react';
import cn from 'classnames';
import { IHistorySearching, IHistoryViewing } from '../../interfaces/history';
import { HistoryAction } from '../../enum/history';
import s from './style.module.scss';

type Props ={
	className: string,
	setIsHistoryVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

function History(props: Props): JSX.Element {
	const history: Array<IHistorySearching | IHistoryViewing>
			= localStorage.historyActions
			? JSON.parse(localStorage.historyActions) : [];

	return (
		<>
			<div className={cn(s.history, props.className)}>
				<div className={s.history__container}>
					<h3 className={s.history__title}>History</h3>
					<div className={s.history__results}>
						{history.map(
							(item: IHistorySearching | IHistoryViewing,
							index: number): JSX.Element => (
								<div className={s.history__action}
									 key={index}>
									{item.type === HistoryAction.Viewing
										? <div className={s.history__item}>
											<div className={s.history__subtitle}>
												Looked at the character card:
												{item.characterName}
											</div>
										  </div>
										: <div className={s.history__item}>
											<div className={s.history__subtitle}>
												{item.filterName}
											</div>
											{item.filterFields.map(
												(field, index: number): JSX.Element => (
												<div className={s.history__text}
													 key={index}>
													{field.field}: "{field.value}"
												</div>
											))}
										</div>
									}
								</div>
							)
						)}
					</div>
					<button className={s.history__button}
							onClick={() => props.setIsHistoryVisible(false)}>
							Close
					</button>
				</div>
			</div>
		</>

	);
}

export default History;