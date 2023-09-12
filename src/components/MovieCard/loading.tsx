import React from 'react'
import { Link } from 'react-router-dom'

export default function loading() {
  return (
    <article>
  <Link to={`/movies/1234`}>
    <div className="relative">
      <figure className="relative ">
      <div className="animate-pulse  h-[350px]  rounded-lg bg-gray-300"></div>
      </figure>
      <div className="space-y-[0.35rem] mt-5">
        <div className="animate-pulse bg-gray-300 h-4 w-1/4"></div> {/* Loading line */}
        <h3 className="animate-pulse bg-gray-300 h-5 w-3/4 mt-2"></h3> {/* Loading title */}
        <div className="animate-pulse flex gap-2 mt-1">
          <div className="animate-pulse bg-gray-300 h-4 w-8"></div> {/* Loading rating badge */}
          <div className="animate-pulse bg-gray-300 h-4 w-12"></div> {/* Loading rating */}
        </div>
        <div className="space-x-[0.15rem]">
          {[1, 2, 3].map((id) => (
            <span
              key={id}
              className="animate-pulse bg-gray-300 h-4 w-16 inline-block rounded-full"
            ></span>
          ))}
        </div>
      </div>
    </div>
  </Link>
</article>
  )
}
