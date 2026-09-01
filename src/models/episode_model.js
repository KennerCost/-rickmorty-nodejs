class Episode {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.air_date = data.air_date;
    this.episode = data.episode;
    this.characters = data.characters;
  }

  static fromJson(json) {
    return new Episode(json);
  }
}

module.exports = Episode;