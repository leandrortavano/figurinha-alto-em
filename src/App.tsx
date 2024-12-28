import { useState, useRef } from 'react'
import { exportComponentAsPNG } from 'react-component-export-image';
import './App.css'
import HeaderImg from './assets/images/HeaderImg.jpg';

function App() {
  const [frase, setFrase] = useState<string>("");
  

  const myExport = useRef<any>();

  return (
    <>
      <div className="container">
        <h3>Gerador de ALTO EM</h3>
        <p>Crie suas próprias etiquetas de alerta da Anvisa.</p>

        <form name="generator">
          <input type="text" value={frase} onChange={(e) => { setFrase(e.target.value) }}></input>
        </form>


        <div className="etiqueta" ref={myExport}>
          <img src={HeaderImg} />
          <div className="etiqueta-texto">{frase ? frase.toUpperCase() : 'GORDURA SATURADA'}</div>
        </div>

        <div className="download" onClick={() => exportComponentAsPNG(myExport, { fileName: "alto-em-generator", html2CanvasOptions: {backgroundColor: null }})}>BAIXAR SUA FIGURINHA</div>

      </div>


    </>
  )
}

export default App
