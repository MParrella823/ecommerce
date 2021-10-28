export class Product {
    public onsale: boolean = false;
    public salePrice: number = 0;
    public displayPrice: number = 0; 
    constructor(public name: string, public price: number, public image: string) { 
        this.displayPrice = this.price;
    }

    placeOnSale(): void {
        if (this.onsale) {
            this.salePrice = this.price * .85;
            this.displayPrice = parseFloat(this.salePrice.toFixed(2));
        } else {
            this.displayPrice = this.price;
        }
    }
}
