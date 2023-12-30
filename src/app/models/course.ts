export class Course {
    id: string;
  title: string;
  description: string;
  price: number;
  imageBase64: string;

  constructor(id: string, title: string, description: string, price: number, image: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.imageBase64 = image;
  }
}
