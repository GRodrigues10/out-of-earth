import styled from "styled-components";

export const StylesHistory = styled.div `



    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: justify;
        padding: 20px;
        width: 100%;
        height: 100%;
    }
    h2{
        color: #FF5C00;
        font-size: 2rem;
        
       
    }

    p{
        color: #C4C9CC;
        font-size: 0.9rem;
        margin-top: 10px;

    }

    @media screen and (min-width:768px) {
        h2{
            font-size: 2.5rem;
        }

        p{
            font-size: 1rem;
        }
    }

      @media screen and (min-width:992px) {
        h2{
            font-size: 3rem;
        }

        p{
            font-size: 1.3rem;
        }
    }


      @media screen and (min-width:1200px){
    h2{
    font-size: 3.5rem;
  }

  p{
    font-size: 1.5rem;
  }
}
`