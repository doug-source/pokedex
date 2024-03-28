import { PokemonData } from '../types/api/pokemon';

export const extractAbility = (data: PokemonData) => {
    const [{ ability }] = data.abilities.filter(
        (ability) => !ability.is_hidden
    );
    return ability.name;
};

export const pickArtWorkSprite = (pokemon: PokemonData) => {
    return pokemon.sprites.other['official-artwork'].front_default;
};

export const pickArtWorkSprites = (pokemons: PokemonData[]) => {
    return pokemons.map((pokemon) => pickArtWorkSprite(pokemon));
};
