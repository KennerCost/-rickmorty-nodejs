// Importa o model do personagem
const Character = require("../models/character_model");

// Recebe a URL do personagem e busca seus dados
async function getCharacters(ids) {
  if (ids.length === 0) {
    return [];
  }

  // get do personagens 
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${ids}`
  );

  // Lança um erro se a requisição não foi bem-sucedida
  if (!response.ok) {
    throw new Error("Erro ao buscar personagem.");
  }

  // Converte o corpo da resposta JSON em um objeto JavaScript
  const json = await response.json();

  // Com apenas um ID, a API retorna um objeto em vez de uma lista
  const characters = Array.isArray(json) ? json : [json];

  // Transforma cada personagem no model
  return characters.map((data) => Character.fromJson(data));
}

module.exports = { getCharacters };