const Character = require("../models/character_model");
const { externalFetch } = require("../utils/external_fetch");

async function getCharacters(ids) {
  if (ids.length === 0) {
    return [];
  }

  const response = await externalFetch(
    `https://rickandmortyapi.com/api/character/${ids}`
  );

  if (!response.ok) {
    const error = new Error("Failed to fetch characters.");
    error.status = response.status;
    throw error;
  }

  const json = await response.json();
  const characters = Array.isArray(json) ? json : [json];

  return characters.map((data) => Character.fromJson(data));
}

module.exports = { getCharacters };
