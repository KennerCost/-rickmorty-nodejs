class Character {
    constructor(data) {
        this.name = data.name;
        this.status = data.status;
        this.species = data.species;
        this.gender = data.gender;
        this.image = data.image;
        this.created = data.created;
        this.origin = data.origin.name;
    }

    static fromJson(json) {
        return new Character(json);
    }
}

module.exports = Character;
