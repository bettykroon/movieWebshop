import { IProducts } from './IProducts';

export interface IMovies {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    price: number;
    year: number;
    added: string;
    productCategory: IProducts[];
}