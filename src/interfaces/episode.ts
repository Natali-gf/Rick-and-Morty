import { ICharacter } from './character';

export interface IEpisode {
	id: string | number,
	name: string,
};

export interface IEpisodeWithCharacters extends IEpisode {
	characters: ICharacter[]
};