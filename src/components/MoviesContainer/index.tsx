import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function PosterContainer({children}: Props) {
  return (
        <section className='grid  md:grid-cols-2 lg:grid-cols-4 gap-20 justify-center mt-8 content-center grid-flow-row-dense'>
            {
                children
            }
        </section> 
  )
}