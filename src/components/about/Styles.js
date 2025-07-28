import styled from "styled-components";

export const StylesAbout = styled.div `
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px;

    h2{
        font-size: 2rem;
        color: #FF5C00;
        margin-bottom: 20px;

    }
    p{
        font-size: 0.9rem;
        color: #C4C9CC;
        text-align: justify;
    }

      @media screen and (min-width:768px) {
        h2{
            font-size: 2.5rem;
        }

        p{
            font-size: 1rem;
        }
    }


      @media screen and (min-width:992px){
    h2{
    font-size: 3rem;
  }

  p{
    font-size: 1.4rem;
  }
}

     @media screen and (min-width:1200px){
    h2{
    font-size: 3.5rem;
  }

  p{
    font-size: 1.6rem;
  }
}
`