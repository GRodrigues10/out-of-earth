import styled from "styled-components";
import background from '../../assets/background.png';

export const StylesHeader = styled.div`
  position: relative; /* <=== ESSENCIAL para posicionar ::before */

  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  /* background-attachment: fixed; */

  div {
    position: relative;  /* para ficar acima do ::before */
    z-index: 3;          /* garante que texto fique por cima da sombra */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
  }
&::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(11, 15, 22, 0) 70%,    /* começa transparente um pouco antes */
    rgba(11, 15, 22, 0.2) 80%,  /* sombra leve já iniciando */
    rgba(11, 15, 22, 0.5) 85%,  /* sombra média */
    rgba(11, 15, 22, 0.75) 90%, /* sombra mais forte */
    rgba(11, 15, 22, 0.9) 95%,  /* quase preta */
    rgba(11, 15, 22, 1) 100%    /* totalmente preta */
  );
  z-index: 2;
}


  h1 {
    color: #E5D9BA;
    font-size: 3rem;
  }

  p {
    color: #FF5C00;
    font-size: 1rem;
  }

  @media screen and (min-width: 768px) {
    background-attachment: fixed;

    h1 {
      font-size: 4rem;
    }
    p {
      font-size: 1.3rem;
    }
  }

  @media screen and (min-width: 992px) {
    h1 {
      font-size: 6rem;
    }
    p {
      font-size: 1.4rem;
    }
  }

  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 7rem;
    }

    p {
      font-size: 1.8rem;
    }
  }
`;



/*
cor de fundo principal:#0B0F16 - azul escuro
cor do título principal:#E5D9BA - beje areia
cor dos subtítulos:#FF5C00 - laranja vibrante
texto corrido:#C4C9CC - beje acidentando claro




*/ 
