import React from 'react';
import { StylesImages } from './Styles';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';

const Galeria = () => {
  const navigate = useNavigate()
  function back(){
    navigate('/')
  }
  return (
    <>
    <StylesImages>
      <h1>Galeria Espacial</h1>
      <div className="grid-container">
        <div className="images image1"></div>
        <div className="images image2"></div>
        <div className="images image3"></div>
        <div className="images image4"></div>
        <div className="images image5"></div>
        <div className="images image6"></div>
        <div className="images image7"></div>
        <div className="images image8"></div>
        <div className="images image9"></div>
      </div>
      <div className="btn-wrapper">
        <button onClick={back}>Voltar</button>
      </div>
    </StylesImages>
      <Footer/>
    </>
  );
};

export default Galeria;
