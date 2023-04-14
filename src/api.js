const base_url = `https://rickandmortyapi.com/api`;

export const aliveCharacters = () => `${base_url}/character/?status=alive`;
export const deadCharacters = () => `${base_url}/character/?status=dead`;

export const searchCharacter = (name) => `${base_url}/character/?name=${name}`;

export const gameDetailsUrl = (id) => `${base_url}/character/${id}`;
