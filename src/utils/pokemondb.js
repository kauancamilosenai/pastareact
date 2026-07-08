import { dbPromise } from "./db";

// aqui é onde alimentamos a tabela dos pokemons

// aqui coletamos o objeto do pokemons pelo 'nome' como se fosse o id do SQL
export const getPokemonDB = async (nome) => {
    const db = await dbPromise;
    return db.get("pokemons", nome);
};

// aqui repassamos as informações que acabamos de coletar para o nosso data bank
     export const savePokemonDB = async (pokemon) => {
    const db = await dbPromise;
    return db.put("pokemons", pokemon);
};