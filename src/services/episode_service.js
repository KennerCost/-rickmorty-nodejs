// Importa o model do episódio
const Episode = require("../models/episode_model");

// Importa a função que busca e retorna um personagem
const { getCharacters } = require("./character_service");

// Busca um episódio pelo ID
async function getById(id) {
  // Faz uma requisição GET para a API do Rick and Morty
  const response = await fetch(
    `https://rickandmortyapi.com/api/episode/${id}`
  );

  // Retorna null se o episódio não existir
  if (response.status === 404) {
    return null;
  }

  // Lança um erro caso a API retorne outra falha
  if (!response.ok) {
    throw new Error("Erro ao buscar episódio.");
  }

  const json = await response.json();

  // O map chama getCharacter para cada URL de personagem.
  // Transforma cada url [1, 2, 3] em "1,2,3"
  const ids = json.characters.map((url) => {
    return url.split("/").pop();
  }).join(",");

  // Busca todos os personagens em uma única chamada
  const characters = await getCharacters(ids);

  // Mantém os dados do episódio e substitui as URLs
  return Episode.fromJson({
    ...json,
    characters,
  });
}

module.exports = { getById };