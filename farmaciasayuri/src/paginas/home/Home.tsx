import ListaCategoria from "../../components/categoria/listaCategorias/ListaCategorias";

function Home() {
    return (
        <>
            <div className="flex justify-center my-5">
                <img
                    src="https://img.farmaciasapp.com.br/marketplace/fapp-mktp/banners/e4d97fff-9bfe-4a44-83fc-b86449b8ee68-png?ims=1320x360"
                    alt="image 1"
                    className="h-72 w-11/12 object-cover rounded-2xl"
                />
            </div>

            <div className="container flex flex-col w-11/12 justify-center mx-auto">
                <h2 className="text-2xl uppercase font-bold text-rose-500">Categorias</h2>
                <ListaCategoria/>

                <h2 className="pt-4 text-2xl uppercase font-bold text-rose-500">Produtos</h2>
                
            </div>

        
        </>
    )
}

export default Home;
