export class Order {
  id: number;
  name: string;
  description: string;
  date: Date;

  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.date = new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
  }
}
