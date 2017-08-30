export class Product {
    constructor(public sku: string,
                public name: string,
                public imageUrl: string,
                public departmenr: string[],
                public price: number) {}
}
