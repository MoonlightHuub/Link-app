import './App.css'
import './Css/normalize.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <header className='header-container'>
        <h1 className='title-header'>
          Found Me on my Links!
        </h1>
      </header>
      <main className='main-container'>
        <Card />
      </main>
    </>
  )
}

export default App
