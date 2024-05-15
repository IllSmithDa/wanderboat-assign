// import { useEffect } from 'react';
import Calendar from './components/Calendar'

import './App.css'


function App() {
  /*
  useEffect(() => {
    const circle = document?.getElementById('custom-cursor')
    if (circle) {
      window.addEventListener('mousemove', (event) => {
        circle.style.left = event.clientX - 18 + 'px';
        circle.style.top = event.clientY - 18 + 'px';
      })
    }
  }, [])
  */
  return (
    <main>
      {/* <div id='custom-cursor' /> */}
      <Calendar />
    </main>
  )
}

export default App
