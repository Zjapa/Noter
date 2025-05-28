export interface NoteType {
  id: number | string;
  lastEditDate: Date;
  tags: string[];
  title: string;
  content: string;
}
