import { useEffect, useState } from "react";

export interface PokemonListProps {
	render: (pokemon: Pokemon[]) => React.ReactNode;
}

export interface Pokemon {
	name: string;
	url: string;
}

export interface PokemonResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: Pokemon[];
}

export const PokemonList = ({ render }: PokemonListProps) => {
	const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0";

	const [pokemons, setPokemons] = useState<Pokemon[]>([]);

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data: PokemonResponse) => setPokemons(data.results));
	}, []);

	return <div>{render(pokemons)}</div>;
};
