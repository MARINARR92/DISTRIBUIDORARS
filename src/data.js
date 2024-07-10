// import images
import Logo from '../src/img/header/logo.png';
import ProductImg1 from '../src/img/product/1.png';
import ProductImg2 from '../src/img/product/2.png';
import ProductImg3 from '../src/img/product/3.png';
import ProductImg4 from '../src/img/product/4.png';
import ProductImg5 from '../src/img/product/5.png';
import ProductImg6 from '../src/img/product/6.png';
import ProductImg7 from '../src/img/product/7.png';
import ProductImg8 from '../src/img/product/8.png';
import ProductImg9 from '../src/img/product/9.png';
import ProductImg10 from '../src/img/product/10.png';
import ProductImg11 from '../src/img/product/11.png';
import GalleryImg1 from '../src/img/gallery/1.png';
import GalleryImg2 from '../src/img/gallery/2.png';
import GalleryImg3 from '../src/img/gallery/3.png';
import GalleryImg4 from '../src/img/gallery/4.png';
import GalleryImg5 from '../src/img/gallery/5.png';
import GalleryImg6 from '../src/img/gallery/6.png';
import GalleryImg7 from '../src/img/gallery/7.png';
import GalleryImg8 from '../src/img/gallery/8.png';
import GalleryImg9 from '../src/img/gallery/9.png';
import GalleryImg10 from '../src/img/gallery/10.png';
import GalleryImg11 from '../src/img/gallery/11.png';





// import icons
import { IoLogoWhatsapp, IoMdArrowForward } from 'react-icons/io';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
} from 'react-icons/io';

const customIconStyle = {
  color: '043F6F', // Defina a cor que deseja para o ícone aqui
  fontSize: '24px', // Defina o tamanho da fonte do ícone aqui
};

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Home' },  
    { href: '/Products', name: 'Produtos' },     
    { href: '/Partners', name: 'Parceiros' },
    { href: '/Company', name: 'Empresa' },
    { href: '/Contact', name: 'Contato' },
    
  ],
};

export const socialData = [ 
  { href: 'https://www.instagram.com/distribuidorarsltda/', icon: <IoLogoInstagram style={customIconStyle}/> },
  { href: 'https://api.whatsapp.com/send?phone=5537999538582&text=', icon: <IoLogoWhatsapp style={customIconStyle}/> },
];

export const heroData = {
  title: 'CULTIVANDO A ARTE DE ATENDER BEM, PORQUE VOCÊ MERECE O',
  subtitle:
    'MELHOR!',
};


export const productData = {
  btnText: 'Saiba Mais',
  btnIcon: <IoMdArrowForward />,
  title: 'Linha de Produtos',       
  images: [
    {
      src: ProductImg1,
      original: ProductImg1,
      width: 280,
      height: 280,
      title: 'Itambé',
      link:'https://www.itambe.com.br/',
    },
    {
      src: ProductImg2,
      original: ProductImg2,
      width: 280,
      height: 280,
      title: 'Poços de Caldas',
      link:'https://pocosdecaldasoriginal.com.br/',     
    },
    {
      src: ProductImg3,
      original: ProductImg3,
      width: 280,
      height: 280,
      title: 'Croques',
      link:'https://croques.com.br/',
    },
    {
      src: ProductImg4,
      original: ProductImg4,
      width: 280,
      height: 280,
      title: 'Maguary',
      link:'https://www.lojabritvic.com.br/maguary',
    },
    {
      src: ProductImg5,
      original: ProductImg5,
      width: 280,
      height: 280,
      title: 'Joselito',
      link:'http://joselito.com.br/',
    },
    {
      src: ProductImg6,
      original: ProductImg6,
      width: 280,
      height: 280,
      title: 'Cotoches',
      link:'https://cotoches.com.br/',
    },
    {
      src: ProductImg7,
      original: ProductImg7,
      width: 280,
      height: 280,
      title: 'Vitarella',
      link:'https://vitarella.com.br/',
    },
    {
      src: ProductImg8,
      original: ProductImg8,
      width: 280,
      height: 280,
      title: 'President',      
      link:'https://queijospresident.com.br/',
      
    },
    {
      src: ProductImg9,
      original: ProductImg9,
      width: 280,
      height: 280,
      title: 'Batavo',        
      link:'https://batavo.com.br/',  
    },
    {
      src: ProductImg10,
      original: ProductImg10,
      width: 280,
      height: 280,
      title: 'Só Minas',        
      link:'https://www.sominas.com.br/',  
    },
    {
      src: ProductImg11,
      original: ProductImg11,
      width: 280,
      height: 280,
      title: 'Bem Brasil',        
      link:'https://www.bembrasil.ind.br/',  
    },
  ],
};

export const aboutData = {
  title: 'Sobre nós:',
  subtitle1:
    'Com uma trajetória de 20 anos pautada pela excelência, a Distribuidora RS tem sido líder na distribuição de produtos alimentícios no Centro-Oeste de Minas Gerais. Fundada em 12 de setembro de 2000, na acolhedora cidade de Formiga-MG, nossa empresa se destaca pela parceria sólida com as principais marcas do mercado, como Itambé, Batavo, President, Poços de Caldas, Parmalat, Cotoches, Vitarella, Bem Brasil, Croques, Joselito, Maguary e Só Minas.',
  subtitle2:
    'Na Distribuidora RS, a eficiência é um pilar fundamental. Estamos sempre empenhados em superar as expectativas dos nossos clientes, oferecendo um serviço que alia agilidade na entrega à variedade de produtos de altíssima qualidade. Nosso objetivo é contribuir para o sucesso dos negócios dos nossos parceiros comerciais, proporcionando soluções em distribuição que fazem a diferença.',
  btnText: 'Saiba Mais',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'Parceiros',   
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 220,
      height: 220,
      title: 'Itambé',
      description: 'Indústria parceira no seguimento de lácteos.',
      link:'https://www.itambe.com.br/',      
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 220,
      height: 220,
      title: 'Cotochés',
      description: 'Indústria parceira no seguimento de lácteos.',
      link:'https://cotoches.com.br/',
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 220,
      height: 220,
      title: 'Maguary',
      description: 'Indústria parceira no seguimento de sucos e água de coco.',
      link:'https://www.lojabritvic.com.br/maguary',
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 220,
      height: 220,
      title: 'Joselito',
      description: 'Indústria parceira no seguimento de massas.',
      link:'http://joselito.com.br/',
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 220,
      height: 220,
      title: 'Poços de caldas',
      description: 'Indústria parceira no seguimento de lácteos.',
      link:'https://pocosdecaldasoriginal.com.br/',
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 220,
      height: 220,
      title: 'Croques',
      description: 'Indústria parceira no seguimento de batata congelada, palha e chips.',
      link:'https://croques.com.br/',
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 220,
      height: 220,
      title: 'Vitarella',
      description: 'Indústria parceira no seguimento de bolacha.',
      link:'https://vitarella.com.br/',
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 220,
      height: 220,
      title: 'Bem Brasil',
      description: 'Indústria parceira no seguimento de batata congelada.',
      link:'https://www.bembrasil.ind.br/',
      
    },
    {
      src: GalleryImg9,
      original: GalleryImg9,
      width: 220,
      height: 220,
      title: 'Só Minas',
      description: 'Indústria parceira no seguimento de pão de alho.',
      link:'https://www.sominas.com.br/',  
    },
    {
      src: GalleryImg10,
      original: GalleryImg10,
      width: 220,
      height: 220,
      title: 'President',
      description: 'Indústria parceira no seguimento de queijos.',
      link:'https://queijospresident.com.br/',  
    },
    {
      src: GalleryImg11,
      original: GalleryImg11,
      width: 220,
      height: 220,
      title: 'Batavo',
      description: 'Indústria parceira no seguimento de lácteos.',
      link:'https://batavo.com.br/',  
    },
  ],
};

export const companyData = {
  title: 'A EMPRESA',
  subtitle1: 'A Distribuidora RS foi fundada em 2000, na cidade de Formiga/MG. Nossa empresa traz consigo uma trajetória de sucesso, ao longo dessa jornada, consolidamos nossa posição como um nome de destaque no mercado de distribuição, oferecendo produtos de alta qualidade a diversas cidades do Centro-Oeste Mineiro.',
  subtitle2: 'Nosso compromisso com a excelência é evidente em nossas parcerias com marcas respeitadas, incluindo nomes como Itambé, Batavo, President, Poços de Caldas, Parmalat, Cotoches, Vitarella, Bem Brasil, Croques, Joselito, Maguary e Só Minas. Estas parcerias nos permitem oferecer uma gama diversificada de produtos, atendendo às necessidades variadas dos nossos clientes.',
  subtitle3: 'Nossa experiência no setor de distribuição nos deu uma compreensão profunda do mercado local, bem como uma visão precisa das necessidades dos consumidores.',  
  subtitle4: 'Hoje, nossa área de atuação abrange um amplo território, atendento mensalmente cerca de 720 clientes. Estamos constantemente comprometidos em aprimorar nossas operações logísticas para garantir que os produtos cheguem aos nossos clientes de forma eficiente e segura.',  
  subtitle5: 'Nossa infraestrutura moderna inclui um galpão localizado em Formiga, que oferece espaço adequado para armazenagem e controle de estoque. Além disso, nossa frota de 5 caminhões baú, equipados para o transporte seguro, garante a integridade dos produtos durante todo o percurso até os pontos de venda.',
  subtitle6: 'Nossa equipe é o coração da Distribuidora RS, composta por 27 colaboradores altamente capacitados e dedicados, que compartilham nosso compromisso com a excelência e a satisfação do cliente. Todos eles possuem um profundo conhecimento do mercado e ampla experiência no setor de distribuição.',
}




export const contactData = {
  title: 'Entre em contato:',
  subtitle: 'Preencha o formulário abaixo e clique em enviar. Responderemos sua mensagem o mais rápido possível!',
  
  form: {
    name: 'Digite seu nome',
    email: 'Digite seu e-mail',
    number: 'Digite seu telefone',
    subject: 'Digite um assunto',
    message: 'Digite sua mensagem',
    btnText: 'Enviar',
  },

  label: {
    name: 'Nome',
    email: 'E-mail',
    number: 'Telefone',
    subject: 'Assunto',
    message: 'Mensagem',


  },
};

export const footerData = {
  about: {
    title: 'Mapa do site',

    items: [
      { href: '/', name: 'Home' },
      { href: '/Products', name: 'Produtos' },
      { href: '/Partners', name: 'Parceiros' },
      { href: '/Company', name: 'Empresa' },
      { href: '/Contact', name: 'Contato' },      
    ],
    
  },
  contact: {
    title: 'Atendimento',
    address: {
      icon: <FaMapMarkerAlt />,
      name: 'Rua Lizandro Veloso da Cunha, 2 - Distrito Industrial Vereador José Luiz Andrade - Formiga/MG',
    },
    whatsapp: {
      icon: <IoLogoWhatsapp />,
      number: '+55 37 99953-8582',
    },

    email: {
      icon: <FaEnvelope />,
      address: 'distribuidoraalimentosrs@yahoo.com.br',
    },

    
  },
  
};
