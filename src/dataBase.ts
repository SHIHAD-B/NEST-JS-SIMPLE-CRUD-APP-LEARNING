export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    publishedYear: number;
    available: boolean;
  }
  
  export const books: Book[] = [
    {
      id: 1,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      publishedYear: 1960,
      available: true
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      genre: "Dystopian",
      publishedYear: 1949,
      available: false
    },
    {
      id: 3,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      genre: "Classic",
      publishedYear: 1925,
      available: true
    },
    {
      id: 4,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      genre: "Fiction",
      publishedYear: 1951,
      available: true
    },
    {
      id: 5,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      publishedYear: 1813,
      available: false
    }
  ];
  