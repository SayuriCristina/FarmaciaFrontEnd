import { Link } from 'react-router-dom'
import Categoria from '../../../models/Categoria'

// Define as propriedades do componente CardTemas
interface CardCategoriaProps {
    categoria: Categoria
}
function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-rose-400 text-white font-bold text-2xl capitalize'><span className='text-cyan-400'>Categoria: </span>{categoria.nome}</header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
            <div className="flex">
                <Link to={`/editarCategoria/${categoria.id}`} className='w-full text-white bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarCategoria/${categoria.id}`} className='text-white bg-rose-400 hover:bg-rose-600 w-full flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardCategoria