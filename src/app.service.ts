import { Injectable } from '@nestjs/common';
import { Book, books } from './dataBase';

@Injectable()
export class AppService {
  getAllBooks(): Book[] {
    return books;
  }



  getBookById(id: number): Book | undefined {
    return books.find((item) => item.id == id)
  }

  addBook(body: Partial<Book>): Book {
    const newId = books[books.length - 1].id + 1
    const newData: Book = {
      id: newId,
      author: body.author ?? "",
      available: body.available ?? false,
      genre: body.genre ?? "",
      publishedYear: body.publishedYear ?? 1990,
      title: body.title ?? ""

    }

    books.push(newData)
    return newData

  }

  updateBook(id: number, updateBook: Partial<Book>): Book | undefined {
    const findBook = books.find((item) => item.id == id)
    const updatedBook = {
      ...findBook,
      ...updateBook
    }
    books.map((item) => {
      if (item.id == id) {
        return updatedBook
      } else {
        return item
      }
    })
    return updatedBook
  }

  deleteBook(id: number): Book[] {
    const restBooks = books.filter((item) => item.id != id)
    return restBooks
  }

}
