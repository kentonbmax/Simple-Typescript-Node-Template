export interface ICustom {
    name: string,
    index: number
}

export class Custom implements ICustom {
    // private field
    private readonly id: string
    constructor(
        public name: string,
        public index: number
    ) {
        this.id = name + index.toString();
    }
}

this.buildNew = function(instance:ICustom): ICustom {
    let newInstance = new Custom(instance.name, instance.index)
    return newInstance
}

this.getId = function(): string {
    return this.id
}