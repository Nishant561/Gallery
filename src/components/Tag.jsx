import React from 'react'

function Tag({text}) {
  return (
    <>
      <div className='bg-zinc-500 px-6 py-1 rounded-full  text-white ' style={{width:'fit-content'}}>
                              #{text}
                        </div>
    </>
  )
}

export default Tag
