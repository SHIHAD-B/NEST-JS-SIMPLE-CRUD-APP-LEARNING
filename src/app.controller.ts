import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { Book } from './dataBase';

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("allbooks")
  getBooks(): Book[] {
    return this.appService.getAllBooks();
  }

  @Get('bookbyid/:id')
  getbookByid(@Param('id') id: string): Book | undefined {
    const bookId = id
    return this.appService.getBookById(Number(id))
  }

  @Post('addbook')
  addBook(@Body() book: Partial<Book>): Book {
    const body = book;
    if (!body.author || !body.available || !body.genre || !body.publishedYear || !body.title) return undefined
    return this.appService.addBook(body)
  }

  @Put("update/:id")
  updateBook(@Param('id') id: string, @Body() body: Partial<Book>): Book | undefined {
    return this.appService.updateBook(Number(id), body)
  }

  @Delete('delete/:id')
  deleteBook(@Param('id') id:string):Book[]{
    return this.appService.deleteBook(+id)
  }


}
