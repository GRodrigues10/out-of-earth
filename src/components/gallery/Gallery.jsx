import { StylesGallery } from './Styles'
import { useNavigate } from 'react-router-dom'

function Gallery() {

  const navigate = useNavigate();
  function fetch(){
    navigate('/images')
  }
  return (
    <StylesGallery>

      
            <h2>Galeria</h2>

            
           
                <div className='planet1 planetas'>
                </div>
                <div className='planet2 planetas'>
                
                </div>
                <div className='planet3 planetas'>
                </div>
            
           

            <button onClick={fetch}>Ver Fotos</button>
       

    </StylesGallery>
  )
}

export default Gallery