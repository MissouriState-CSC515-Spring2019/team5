export interface IRace {
    index: number,
    name: string,
    speed: number,
    abilityBonuses: Array<number>,
    alignment: string,
    ageDesc: string,
    size: string,
    sizeDesc: string,
    proficiencies: Array<string>,
    languages: Array<string>,
    languageDesc: string,
    traits: Array<string>,
    subRaces: Array<string>
}