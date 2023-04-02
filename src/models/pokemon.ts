import { IListItem } from "./common";

interface IPokemonAbility {
  ability: IListItem;
  is_hidden: boolean;
  slot: number;
}

interface IPokemonType {
  type: IListItem;
  slot: number;
}

interface IPokemonSprite {
  front_default: string;
  back_default: string;
}

export interface IPokemon {
  name: string;
  url: string;
  types: IPokemonType[];
  abilities: IPokemonAbility[];
  sprites: IPokemonSprite;
  base_experience: number;
  weight: number;
}
