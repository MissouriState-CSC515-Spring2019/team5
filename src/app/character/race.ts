export class Race {
    index: number;
    name: string;
    speed: number;
    abilityBonuses: Array<number>;
    alignment: string;
    ageDesc: string;
    size: string;
    sizeDesc: string;
    proficiencies: Array<string>;
    languages: Array<string>;
    languageDesc: string;
    traits: Array<string>;
    subRaces: Array<string>;

    constructor(index, name, speed, abilityBonuses: Array<number>, alignment, 
        ageDesc, size, sizeDesc, proficiencies, languages, languageDesc,
        traits, subRaces) {
        this.index = index;
        this.name = name;
        this.speed = speed;
        this.abilityBonuses = [];
        for(let abilityBonus in abilityBonuses) {
            this.abilityBonuses.push(Number.parseInt(abilityBonus));
        }
        this.alignment = alignment;
        this.ageDesc = ageDesc;
        this.size = size;
        this.sizeDesc = sizeDesc;
        this.proficiencies = [];
        for(let pro in proficiencies) {
            this.proficiencies.push(pro);
        }
        this.languages = [];
        for(let language in languages) {
            this.languages.push(language);
        }
        this.languageDesc = languageDesc;
        this.traits = [];
        for(let trait in traits) {
            this.traits.push(trait);
        }
        this.subRaces = subRaces;
        for(let subRace in subRaces) {
            this.subRaces.push(subRace);
        }
    }
}