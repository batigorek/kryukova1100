export interface MGood {
    id?: number;
    name: string;
    articul: number;
    weight: number;
    maker: string;
    price: number;
    count: number;
    kategory: number;
}

export enum MGoodsType {
    furniture,
    tech,
    book,
    phone
}