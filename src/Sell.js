import Header from "./Componets/header/header";
import Main from "./Componets/main/main";
import ImageSection from "./Componets/imageSection/imageSection";
import ProductAdd from "./Componets/productAdd/productAdd";
import Iframe from "./Componets/IFrame/iframe";
import Routing from "./Componets/routing/routing";
import CarouselPage from "./Componets/carosalPage/carosalPage";
import Grow from "./Componets/growPage/grow";
import Footer from "./Componets/footer/footer";

export default function Sell() {
  return (
    <div>
      <Header />
      <Main>
        <ImageSection />
        <Iframe />
        <ProductAdd />
        <Routing />
        <CarouselPage />
        <Grow/>
        <Footer/>
      </Main>
    </div>
  );
}
