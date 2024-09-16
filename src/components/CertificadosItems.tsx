import Image from 'next/image';
import Link from 'next/link';

interface Props{
    name: string;
    company:string;
    id_credencial:string;
    url:string;
    type:string; 
    img: string;
}

const CertificadosItems = ({name, company, id_credencial, url, type, img }:Props) => {
  return (
    <div className="flex flex-col justify-center bg-white px-6 pt-4 pb-10 rounded-[35px] w-full mx-auto min-h-[200px] ">
        <div className="flex justify-end mb-4">
        <Image src={img} alt={name} className="w-8" />
        </div>
        <Link href={url} target="_blank"  className="font-semibold text-[17px] text-black"  >
            <span className='font-bold'>
                {name} 
            </span>
            <span className='text-purple'> - {company}.</span>
            
        </Link>
    </div>
  )
}

export default CertificadosItems