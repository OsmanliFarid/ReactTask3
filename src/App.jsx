import { useState } from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Fresh from './components/Fresh'
import Question from './components/question'
import BoxItems from './components/BoxItems'
import Ins from './components/in'


function App() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Header />
      <Fresh/>
      <BoxItems/>
      <Question/>
      <Ins/>
    </div>
  )
}

export default App
