import React, { useState } from 'react'

function Search({searchText}) {

    const [search , setSearch] = useState('')

    const handelSubmit = (e)=>{
            e.preventDefault()
            searchText(search)
            setSearch('')
    }
  return (
    <>
      <form onSubmit={handelSubmit}>
            <input type='text' placeholder='Search...' className='p-5 text-2xl' onChange={(e)=> setSearch(e.target.value) }  value={search} />

                <button type='submit' className='text-black'>Search</button>
      
      </form>
    </>
  )
}

export default Search
