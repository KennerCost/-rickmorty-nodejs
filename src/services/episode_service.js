const Episode = require("../models/episode_model");
const { getCharacters } = require("./character_service");
const { externalFetch } = require("../utils/external_fetch");

async function getById(id) {
  const response = await externalFetch(
    `https://rickandmortyapi.com/api/episode/${id}`
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    const error = new Error("Failed to fetch episode.");
    error.status = response.status;
    throw error;
  }

  const json = await response.json();
  console.log(json);
  
  const ids = json.characters.map((url) => url.split("/").pop()).join(",");
  const characters = await getCharacters(ids);

  return Episode.fromJson({ ...json, characters });
}

module.exports = { getById };
