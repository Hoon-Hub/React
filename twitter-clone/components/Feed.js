import { SparklesIcon } from '@heroicons/react/solid'
import React from 'react'

const Feed = () => {
  return (
    <div className="max-w-2xl flex-grow border-l border-r border-gray-700 text-white sm:ml-[73px] xl:ml-[370px]">
      <div className="sticky top-0 z-50 flex items-center border-b border-gray-700 bg-black py-2 px-3 text-[#d9d9d9] sm:justify-between">
        <h2 className="text-lg font-bold sm:text-xl">Home</h2>
        <div className="hoverAnimation ml-auto flex h-9 w-9 items-center justify-center">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>
    </div>
  )
}

export default Feed
