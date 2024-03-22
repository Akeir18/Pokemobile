// Generated by https://quicktype.io

import { IApiResource } from './IApiResource';

export interface IType {
  damage_relations: DamageRelations;
  game_indices: GameIndex[];
  generation: IApiResource;
  id: number;
  move_damage_class: IApiResource;
  moves: IApiResource[];
  name: string;
  names: Name[];
  past_damage_relations: PastDamageRelation[];
  pokemon: Pokemon[];
}

export interface DamageRelations {
  double_damage_from: IApiResource[];
  double_damage_to: IApiResource[];
  half_damage_from: IApiResource[];
  half_damage_to: IApiResource[];
  no_damage_from: IApiResource[];
  no_damage_to: IApiResource[];
}

export interface GameIndex {
  game_index: number;
  generation: IApiResource;
}

export interface Name {
  language: IApiResource;
  name: string;
}

export interface Pokemon {
  pokemon: IApiResource;
  slot: number;
}

export interface PastDamageRelation {
  damage_relations: DamageRelations;
  generation: IApiResource;
}