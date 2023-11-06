import { CharacterGender } from '../enum/characterGender';
import { CharacterStatus } from '../enum/characterStatus';
import { IEpisode } from './episode';
import { ILocation } from './location';

export interface ICharacterForm {
	name: string,
	type: string,
	species: string,
	status: string,
	gender: string,
};

export interface ICharacter{
	id: string | number,
	name: string,
	image: string,
	type: string,
	species: string,
	status: CharacterStatus,
	gender: CharacterGender,
	location: ILocation,
	episode: IEpisode[],
};

export interface ICharacterDetail extends ICharacter{
	origin: ILocation,
};

export interface ICharacterResponse{
	characters: {
		info: {
			count: number,
		}
		results: ICharacter[]
	}
};