import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "primereact/resources/themes/lara-light-blue/theme.css"; // Choose a theme
import "primereact/resources/primereact.min.css"; // Core styles
import "primeicons/primeicons.css"; // Icons
import MyComponent from './components/MyComponent';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <MyComponent />
    </>

  )
}

export default App
