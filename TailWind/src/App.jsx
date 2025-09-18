import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
    <>
      <div className='flex flex-col h-screen justify-between'>

        {/* LINHA 1 */}
        <div className='flex justify-between'>

          {/* BLOCO 1 */}
          <div className='bg-blue-500 w-40 h-40 flex justify-between flex-col items-center'>
            <div className='h-13 w-13 bg-amber-300'></div>
            <div className='h-13 w-13 bg-amber-300'></div>
          </div>

          {/* BLOCO 2 */}
          <div className='bg-blue-500 w-40 h-40 flex justify-center items-center' >
            <div className='h-13 w-13 bg-amber-300'></div>
          </div>

          {/* BLOCO 3 */}
          <div className='bg-blue-500 w-40 h-40 flex flex-col'>
            <div className='h-20'>
              <div className='h-13 w-13 bg-amber-300'></div>
            </div>
            <div className='flex justify-end items-end h-20'>
              <div className='h-13 w-13 bg-amber-300'></div>
            </div>
          </div>

          {/* BLOCO 4 */}
          <div className='bg-blue-500 w-40 h-40 flex justify-center items-end'>
            <div className='h-13 w-13 bg-amber-300'></div>
          </div>

        </div>

        {/* LINHA 2 */}
        <div className='flex justify-between'>

          {/* BLOCO 1 */}
          <div className='bg-blue-500 w-40 h-40 flex justify-center'>
            <div className='h-13 w-13 bg-amber-300'></div>
          </div>

          {/* BLOCO 2 */}
          <div className='bg-blue-500 w-40 h-40 flex flex-col justify-between'>
            <div className='flex h-13 justify-center'>
              <div className='h-13 w-13 bg-amber-300'></div>
            </div>
            <div className='flex h-13 justify-between'>
              <div className='h-13 w-13 bg-amber-300'></div>
              <div className='h-13 w-13 bg-amber-300'></div>
            </div>
            <div className='flex h-13 justify-center'>
              <div className='h-13 w-13 bg-amber-300'></div>
            </div>
          </div>

          {/* BLOCO 3 */}
          <div className='bg-blue-500 w-40 h-40 flex justify-center p-2'>
            <div className='h-13 w-13 bg-amber-300'></div>
          </div>

        </div>

        {/* LINHA 3 */}
        <div className='flex justify-between'>

          {/* BLOCO 1 */}
          <div className='bg-blue-500 w-40 h-40 flex'>
            
          </div>

          {/* BLOCO 2 */}
          <div className='bg-blue-500 w-40 h-40 flex'>
          </div>

          {/* BLOCO 3 */}
          <div className='bg-blue-500 w-40 h-40 flex'>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
