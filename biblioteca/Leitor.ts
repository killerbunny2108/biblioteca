import { ILeitor } from "./ILeitor";

export class Leitor implements ILeitor {
    id: number;
    nome: string;
    telefone: string;
    maxEmprestimos: number;
    livrosEmprestados: string[];
    
    constructor(id: number, nome: string, telefone: string, maxEmprestimos: number = 3) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.maxEmprestimos = maxEmprestimos;
        this.livrosEmprestados = [];
    }
}