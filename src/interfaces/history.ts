import { HistoryAction } from '../enum/history';
// import { FilterName } from "../types/filter"

export interface IHistory {
	type: HistoryAction.Searching | HistoryAction.Viewing,
};

export interface IHistorySearching extends IHistory {
	type: HistoryAction.Searching
	filterName: string,
	filterFields: [
		{
			field: string,
			value: string
		}
	],
};

export interface IHistoryViewing extends IHistory {
	type: HistoryAction.Viewing
	characterName: string,
};