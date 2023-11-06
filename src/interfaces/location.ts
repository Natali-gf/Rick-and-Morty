import { ICharacter } from './character';

export interface ILocation {
	id: string | number,
	name: string,
	type?: string,
	dimension?: string,
};

export interface ILocationWithCharacters extends ILocation {
	residents: ICharacter[];
};