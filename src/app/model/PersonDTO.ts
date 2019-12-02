export class PersonDTO {
  id: number;
  name: string;
  file: File;


  constructor(name: string, file: File) {
    this.id = 0;
    this.name = name;
    this.file = file;
  }
}
