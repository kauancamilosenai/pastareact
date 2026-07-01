import { openDB } from "idb";

// aqui é onde criamos nossa tabela NoSQL
export const dbPromise = openDB("pokemon-db", 1, {
    upgrade(db) {
        if (!db.objectStoreNames.contains("pokemons")){
            db.createObjectStore("pokemons", { keyPath: "nome" });
        }
    },
});