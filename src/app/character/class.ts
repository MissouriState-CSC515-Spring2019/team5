export class DClass {
    public index: number;
    public name: string;
    public hitDie: number;
    public proficiencies: Array<string>;
    public equipment: Array<string>;
    public subClasses: Array<string>;
    public spellCasting: Array<string>;

    constructor(index, name, hitDie, proficiencies, equipment, subClasses, spellCasting) {
        this.index = index;
        this.name = name;
        this.hitDie = hitDie;
        this.proficiencies = [];
        for(let pro in proficiencies) {
            this.proficiencies.push(pro);
        }
        this.equipment = [];
        for(let equip in equipment) {
            this.equipment.push(equip);
        }
        this.subClasses = [];
        for(let subClass in subClasses) {
            this.subClasses.push(subClass);
        }
        this.spellCasting = spellCasting;
        for(let spell in spellCasting) {
            this.spellCasting.push(spell);
        }
    }
    
}