export type Fact = {
    id: string;
    text: string;
    position: FactPosition;
};

export type FactPosition = {
    top: string;
    left: string;
};

export type FactObject = {
    id: string;
    imageSrc: string;
    name: string;
    facts: Fact[];
};
