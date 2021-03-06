import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center">
      <Navbar />
      <Header/>  
     
        <div className="row justify-content-md-center mt-5">
        <Featured/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties/>
        <MailList/>
        </div>
        <div className="row justify-content-md-center mt-5">
      <Footer/>
      </div>
      </div>
    </div>
  );
};

export default Home;
