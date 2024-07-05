function Navbar() {



    return (
        <>
            <div className='w-full bg-rose-400 text-white flex justify-center py-4 drop-shadow-lg'>
                <div className="container flex justify-between text-lg items-center">
                    <div className='text-2xl font-bold uppercase'>Farmácia</div>
                    <div className='flex gap-4'>
                        <div className='hover:text-cyan-400'>Produtos</div>
                        <div className='hover:text-cyan-400'>Categorias</div>
                        {/* <div className='hover:underline'>Pesquisa</div>
                        <div className='hover:underline'>Carrinho</div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar