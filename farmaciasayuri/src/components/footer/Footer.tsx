import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {

    return (
        <>
            <div className="mt-6 w-full flex justify-center bg-rose-400 text-white bottom-0">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Projeto <span className="text-cyan-400 uppercase">Farmácia</span></p>
                    <p className='text-lg pb-1'>Acesse minhas redes sociais:</p>
                    <div className='flex gap-4'>
                        <FaGithub size={24}/>
                        <FaLinkedinIn size={26}/>
                        <MdEmail size={28}/>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer