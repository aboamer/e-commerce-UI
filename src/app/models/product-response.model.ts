export class ProductResponseModel {

  constructor(private id: number, private title: string, private description: string,
    private price: number, private quantityOrdered: number, private image: string) {
  }

}