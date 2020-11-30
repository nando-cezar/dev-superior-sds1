export type RecordsResponse = {
  content: RecordItem[];
  totalPages: number;
}

export type RecordItem = {
  id: number;
  name: string;
  age: number;
  moment: string;
  gameTitle: string;
  gamePlaform: Plaform;
  genreName: string;
}

export type Plaform = 'XBOX' | 'PC' | 'PLAYSTATION';