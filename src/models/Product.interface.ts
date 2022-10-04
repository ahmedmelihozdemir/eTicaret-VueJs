export interface IProduct {
    title: string;
    image: string;
    price: string;
    id: string;
    rating: {
        rate: number;
        count: number;
    };
    category: string;
    description: string;
}
