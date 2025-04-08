import { ILivro } from "./ILivro";

export class Livro implements ILivro {
    titulo: string;
    autor: string;
    isbn: string;
    disponivel: boolean;
    
    constructor(titulo: string, autor: string, isbn: string) {
        this.titulo = titulo;
        this.autor = autor;
        this.isbn = isbn;
        this.disponivel = true;
    }
}