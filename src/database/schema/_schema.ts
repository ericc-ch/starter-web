import * as auth from "./auth.sql"
import { books } from "./books.sql"

export const schema = {
  ...auth,
  books: books,
}

export type DatabaseSchema = typeof schema
