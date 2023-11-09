import { Category } from "./category";

export interface Product {
    id?:number;
    label:string;
    price:number;
    category:Category;

}
