export class Book {
  public id: number  ;
  public  author: string;
  public title: string;
  public publish: string;
  constructor(id: number, publish: string, title: string, author: string) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.publish = publish;
  }
  setId(id: number) {
    this.id = id;
  }
  setPublish(publish: string) {
    this.publish = publish;
  }
  setTitle(title: string) {
    this.title = title;
  }
  setAuthor(author: string) {
    this.author = author;
  }
  getAuthor() {
    return this.author;
  }

  getTitle() {
    return this.title;
  }
  getId() {
    return this.id;
  }
  getPublish() {
    return this.publish;
  }
}
