import { v4 as uuidv4 } from 'uuid';

import { Fact, FactObject, FactPosition } from '../models/facts';

type FactObjectFactory = Omit<FactObject, 'id'> & {
    addFact: (text: string, position: FactPosition) => FactObjectFactory;
};

type CreateFactObjectFactoryFn = (imageSrc: string, name: string) => FactObjectFactory;

type FactObjectFactoryBuilder = {
    factories: FactObjectFactory[];
    createFactObjectFactory: CreateFactObjectFactoryFn;
    toArray: () => FactObject[];
};

const createFactObject = (imageSrc: string, name: string, facts: Fact[]): FactObject => ({
    id: uuidv4(),
    name,
    imageSrc,
    facts,
});

const createFact = (text: string, position: FactPosition): Fact => ({
    id: uuidv4(),
    text,
    position,
});

export const createFactObjectFactoryBuilder = (callback: (builder: FactObjectFactoryBuilder) => void) => {
    const builder: FactObjectFactoryBuilder = {
        factories: [],
        createFactObjectFactory(imageSrc: string, name: string) {
            const factory: FactObjectFactory = {
                imageSrc,
                name,
                facts: [],
                addFact(text: string, position: FactPosition) {
                    this.facts.push(createFact(text, position));
                    return this;
                },
            };

            this.factories.push(factory);

            return factory;
        },
        toArray() {
            return this.factories.map((factory) => createFactObject(factory.imageSrc, factory.name, factory.facts));
        },
    };

    callback(builder);

    return builder;
};
