import { Biblioteca } from "./Biblioteca";
import { Leitor } from "./Leitor";
import { Livro } from "./Livro";

const biblioteca = new Biblioteca();
biblioteca.cadastrarLeitor(new Leitor(1, "João Silva", "(47) 99999-9999"));
biblioteca.cadastrarLivro(new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "978-3-16-148410-0"));

console.log(biblioteca.emprestarLivro(1, "978-3-16-148410-0"));
console.log(biblioteca.listarLivrosDisponiveis());
console.log(biblioteca.devolverLivro(1, "978-3-16-148410-0"));
