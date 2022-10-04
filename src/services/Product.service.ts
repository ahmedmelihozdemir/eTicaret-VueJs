import { IProduct } from "@/models/Product.interface";
import { HttpClient, HttpRequestParamsInterface,} from "@/models/http-client/index";

export class ProductService {
    getProduct() {
        const countryRequest: HttpRequestParamsInterface = {
            url: `https://fakestoreapi.com/products`,
        };
        return HttpClient.get<IProduct[]>(countryRequest);
    }
}
