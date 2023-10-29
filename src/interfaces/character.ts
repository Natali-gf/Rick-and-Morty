import { CharacterGender } from "../enum/characterGender";
import { CharacterStatus } from "../enum/characterStatus";
import { Episode } from "./episode";
import { Location } from "./location";

export interface Character {
	id: string | number,
	name: string,
	image: string,
	type: string,
	species: string,
	status: CharacterStatus,
	gender: CharacterGender,
	location: Location,
	episode: Episode[],
}