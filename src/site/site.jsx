import Menu from './../app/components/Menu';
import Banner from '../app/components/Banner';
import Features from '../app/components/Features';
import Textemunho from '../app/components/Testemunho';
import Precos from './../app/components/Precos';
import Footer from '../app/components/Footer';

export default function Site() {
  return (
    <div>
        <Menu />
        <Banner />
        <Features />
        <Textemunho />
        <Precos />
        <Footer />
    </div>
  )
}