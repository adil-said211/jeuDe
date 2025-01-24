import React from 'react'
import JeuDe from "./components/JeuDe"

export default function App() {
  return (
    <div className="">
      <div className='container  d-flex justify-content-center align-items-center'>
        <JeuDe cache={2} />
      </div>
    </div>
  )
}

