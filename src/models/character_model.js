class Character {
    constructor(data) {
        this.name = data.name;
        this.status = data.status;
        this.species = data.species;
        this.image = data.image;
        this.created = data.created;
    }

    static fromJson(json) {
        return new Character(json);
    }
}

module.exports = Character;