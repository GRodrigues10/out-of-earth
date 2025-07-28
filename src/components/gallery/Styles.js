import styled from "styled-components";
import planet1 from '../../assets/planet1.jpg'
import planet2 from '../../assets/planet2.jpg'
import planet4 from '../../assets/planet4.jpg'

export const StylesGallery = styled.div `

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;

    h2{
        font-size: 2rem;
        color: #FF5C00;
        margin-bottom: 20px;

    }

  div{
        width: 50%;
        margin: 20px 0;
        border: 1px solid #000000ff;
        height: 300px;
        width: 80%;
        border-radius: 10px;
    }

    
     .planet1{
          background-image: url(${planet1});
          background-size: cover;
          background-position: center center;
     }

      .planet2{
          background-image: url(${planet2});
          background-size: cover;
          background-position: center center;
     }

      .planet3{
          background-image: url(${planet4});
          background-size: cover;
          background-position: center center;
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
    }

      @media screen and (min-width:768px) {
        h2{
            font-size: 2.5rem;
        }

        div{
          height: 400px;
        }

        button{
          font-size: 1.2rem;
        }

     
    }

    @media screen and (min-width:992px) {
      
        h2{
            font-size: 3rem;
        }

  

        div{
          gap: 20px ;
          height: 500px;

        }

        button{
          margin-top: 10px;
          font-size: 1.2rem;
          margin-bottom: 20px;
        }

     
    }

      @media screen and (min-width:1200px){
    h2{
    font-size: 3.5rem;
  }

    div{
      height: 600px;
    }

    button{
      font-size: 2rem;
    }
}

    
    `
    

