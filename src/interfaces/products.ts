
export interface IProduct {
    _id: number;
    description: string;
    image: any;
    inStock?: number;
    price: number | any;
    sizes?: ISizes[];
    slug?: string;
    tags?: string[];
    title: string;
    type?: ITypes;
    quantity?:number | any;
}

export type ISizes = |'S'|'M'|'L'|'XL';
export type ITypes = 'shirts'|'hoodies'|'hats';

