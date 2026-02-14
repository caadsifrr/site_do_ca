import './App.css'
import { Header } from '../Header/Header.tsx'
import caadsLogoBranca from '../../assets/caads-logo-branca.svg'

function App() {

  return (
    <>
      <Header />
      <div>
      <img src={caadsLogoBranca} className="logo" alt="CAADS Logo Branca" />
      <h1>CAADS</h1>
      <h2>Centro Academico de Analise e Desenvolvimento de Sistemas</h2>
      </div>
      <div className="card">
        <button onClick={() => window.open('https://www.instagram.com/caads.ifrr/')}>Acesse o instagram do CAADS
        </button>
      </div>
    </>
  )
}

export default App
