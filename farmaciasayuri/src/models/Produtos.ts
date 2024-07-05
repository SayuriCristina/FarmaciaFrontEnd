import Categoria from './Categoria';

export default interface Produto {
    id: number;
    titulo: string;
    descricao: string;
    quantidade?: number;
    laboratorio?: string;
    preco: number;
    foto: string;
    tema: Categoria | null;
}