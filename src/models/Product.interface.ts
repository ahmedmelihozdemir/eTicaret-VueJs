export interface IProduct {
    title: string;
    image: string;
    price: string;
    id: number;
    rating: {
        rate: number;
        count: number;
    };
    category: string;
    description: string;
}
