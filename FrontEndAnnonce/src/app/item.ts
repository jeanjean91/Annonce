
interface IObjectKeys {
  [key: string]: string | number;
}

export class Item {

	id!: number;
	name!: String;
	description!: String;
	profilImage!: String;
	prix!: number;
}
