/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import Categoria from '../../../models/Categoria';
import { buscar } from '../../../service/Service';
import CardCategoria from '../cardCategoria/CardCategoria';

function ListaCategoria() {
    // Declara um estado para armazenar os categoria, é um array porque é uma coleção de categoria
    const [categoria, setCategoria] = useState<Categoria[]>([]);

    // Função assíncrona para buscar categoria
    async function buscarCategoria() {
        try {
            // Faz a requisição para buscar os categoria, VEM DO BACKEND: FUNÇÃO ASYNC-AWAIT
            await buscar('/categorias', setCategoria);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
                alert('Algo deu errado, tente novamente')
        }
    }

    // useEffect para buscar categoria quando a lista de categoria estiver vazia
    useEffect(() => {
        buscarCategoria();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoria.length]);

    return (
        <>
            {/* Mostra as categorias */}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categoria.map((categoria) => (
                            <CardCategoria key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCategoria;