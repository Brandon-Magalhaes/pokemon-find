import React, { useEffect, useState } from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";
import Modal from "./Modal";
import { FaArrowRotateLeft } from "react-icons/fa6";

interface Pokemon {
  name: string;
  url: string;
  image: string;
  id: number;
}

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState<string>("");
  const [foundPokemons, setFoundPokemons] = useLocalStorage<Pokemon[]>(
    "foundPokemons",
    []
  );
  const [error, setError] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value.toLowerCase());
  };

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        const pokemonResults = response.data.results;

        const pokemonDetails = await Promise.all(
          pokemonResults.map(async (pokemon: { name: string; url: string }) => {
            const pokemonResponse = await axios.get(pokemon.url);
            return {
              name: pokemon.name,
              url: pokemon.url,
              image: pokemonResponse.data.sprites.front_default,
              id: pokemonResponse.data.id,
            };
          })
        );
        setPokemons(pokemonDetails);
      } catch (error) {
        console.error("Erro ao buscar Pokémons:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  const findPokemon = (event: React.FormEvent) => {
    event.preventDefault();
    const foundPokemon = pokemons.find(
      (pokemon) => pokemon.name === inputValue
    );
    if (foundPokemon) {
      if (foundPokemons.some((pokemon) => pokemon.name === inputValue)) {
        setError(`O ${inputValue} já foi digitado`);
      } else {
        setFoundPokemons((prevFoundPokemons) => {
          const newFoundPokemons = [...prevFoundPokemons, foundPokemon];
          return newFoundPokemons.sort((a, b) => a.id - b.id);
        });
        setError("");
      }
    } else {
      setError("Nome inválido");
    }
    setInputValue("");
  };

  const handleReset = () => {
    setFoundPokemons([]);
    localStorage.removeItem("foundPokemons");
    setShowModal(false);
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="p-4">
      <div className="mb-4">
        <button
          onClick={() => setShowModal(true)}
          className="p-1 text-sm text-white bg-red-500 rounded hover:bg-red-700"
        >
          <FaArrowRotateLeft />
        </button>
      </div>
      <h1 className="text-2xl font-bold mb-4">Lista de Pokémons</h1>
      <div className="mb-4">
        <p className="text-lg font-semibold">
          Pokémons encontrados: {foundPokemons.length}
        </p>
      </div>
      <form className="w-full py-4 gap-4" onSubmit={findPokemon}>
        <input
          type="text"
          value={inputValue}
          placeholder="Nome do Pokemon"
          className="p-1 text-lg rounded-md mr-4 border border-gray-400"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="p-1 text-lg text-white font-bold bg-blue-500 rounded-md w-28"
        >
          Enviar
        </button>
      </form>
      {error && <p className="text-red-500">{error}</p>}

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={handleReset}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {foundPokemons.map((pokemon, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded shadow flex flex-col items-center"
          >
            <img src={pokemon.image} alt={pokemon.name} className="mb-2" />
            <p>ID: {pokemon.id}</p>
            <p className="capitalize">{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
