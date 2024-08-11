import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TitleImage } from './components/TitleImage'
import { NameContent } from './components/NameContent'
import { BodyContent } from './components/BodyContent'
import { Footer } from './components/Footer'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-content'>
        <TitleImage />
        <div className='body-container'>
        <NameContent />
        <BodyContent />
        </div>
        
        <Footer />

      </div>
    </>
  )
}

export default App
