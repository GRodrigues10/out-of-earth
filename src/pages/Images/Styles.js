import styled from "styled-components";
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import planet1 from '../../assets/planet1.jpg';
import planet2 from '../../assets/planet2.jpg';
import planet3 from '../../assets/planet3.jpg';
import planet4 from '../../assets/planet4.jpg';
import sat1 from '../../assets/sat1.png';
import sat2 from '../../assets/sat2.png';

export const StylesImages = styled.div`
  padding: 20px;

  h1 {
    text-align: center;
    color: #ff7a26;
    margin-bottom: 20px;
  }

  .grid-container {
    display: grid;
    gap: 15px;
    justify-content: center;
    grid-template-columns: 1fr;
  }

  .images {
    width: 100%;
    height: 250px;
    background-size: cover;
    background-position: center;
    border-radius: 8px;
    border: 2px solid black;
    cursor: pointer;
    transition: .4s ease ;

    &:hover{
      transform: scale(1.025);
    }
  }

  

  /* Classes para cada imagem */
  .image1 { background-image: url(${image1}); }
  .image2 { background-image: url(${image2}); }
  .image3 { background-image: url(${image3}); }
  .image4 { background-image: url(${planet1}); }
  .image5 { background-image: url(${planet2}); }
  .image6 { background-image: url(${planet3}); }
  .image7 { background-image: url(${planet4}); }
  .image8 { 
    background-image: url(${sat1}); 
    background-position: top;
  }
  .image9 { 
    background-image: url(${sat2}); 
    background-position: top;
  }

     button{
     background-color: #FF5C00;
     color: #0B0F16;
     border: none;
     padding: 14px 20px;
     font-size: 1rem;
     font-weight: bold;
     border-radius: 6px;
     cursor: pointer;
     transition: background 0.3s ease;
     width: 80%;
   
     &:hover {
       background-color: #ff7a26;
     }
     margin: 20px 0;
    }

  /* Responsividade */
  @media (min-width: 530px) {
    h1{
      font-size: 2.2rem;
    }
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
    button{
      font-size: 1.2rem;
    }
  }

  @media (min-width: 992px) {
      h1{
      font-size: 2.4rem;
    }
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
    }
    button{
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 1200px) {
    h1{
      font-size: 2.6rem;
    }
    button{
      font-size: 1.6rem;
    }
  }

  /* Centralização de botão */
  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;
