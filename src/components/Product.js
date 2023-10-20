

const Product = () => {

  const pdfUrl = 'https://drive.google.com/file/d/1gvpJFKYxASXkVWrip_0kzI_-cciZ9VXS/view?usp=share_link'
 


  return (
    <section className="py-40 lg:py-[160px]">
      
      <div className='flex flex-col items-center justify-center mt-12'>
      <h2 className="h2">Catálogo</h2>
          
     
      </div>
      
      <p className="text-center text-3xl mt-16 text-blue font-semibold break-words lg:break-normal">
        Aqui você encontra os melhores produtos para o seu comércio.
      </p>

      <p className="text-center text-xl mt-16 break-words lg:break-normal">
        Confira os produtos das melhores marcas em alimentos como lácteos, massas, sucos, água de coco, bolacha, batatas chips, palha e congelada.
      </p>

<a href={pdfUrl} target="_blank" rel="noopener noreferrer">

<div className="flex items-center justify-center h-full mt-16">
      <button className="text-2xl h-[55px] w-[256px] rounded-full btn-outline border-blue">
          Acesse o Cátalago
        </button>
      </div>

</a>
    
    </section>
  );
};

export default Product;
