interface Props {
  title: string
}

import React from 'react'

export const Footer = ({title}:Props) => {
  return (
    <div className='mx-auto max-w-screen-xl p-4 py-8" gap-3 flex'>
      <a className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r
          from-purple-400 to bg-purple-600">redes-sociales</a>
      <a className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r
          from-purple-400 to bg-purple-600">contacto</a>
      <a className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r
          from-purple-400 to bg-purple-600">fantastico</a>
    </div>
  )
}

