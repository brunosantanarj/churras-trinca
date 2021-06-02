import React from 'react'

type Props = {
  children: React.ReactChild;
}

const CardBox = ({ children }: Props) => {
  return (
    <a href="#" className="bg-white p-8 shadow-md">
      {children}
    </a>
  )
}

export default CardBox;
