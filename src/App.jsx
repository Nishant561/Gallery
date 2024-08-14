import { useEffect, useState } from 'react'

import Cards from './components/Cards'
import Search from './components/Search'
function App() {

  const [image ,setImage] = useState([])
  const [term ,setTerm] =useState('')
 const data = async()=>{

  try {
    const res = await fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${term? term :'dog' }`)
    if(!res.ok) {
      throw new error('there was problem in fetching the data')
    }

   const data1 = await res.json() 
   setImage(data1.hits)
   

  } catch (error) {
        console.log('there is error',error)
  }

 }

useEffect(()=>{
  data()
},[term,image])
  
  
  return (
   <>
        <div className='w-screen h-screen overflow-x-hidden ' >
            <Search searchText = {(text)=> setTerm(text)} />
              <div className='w-full h-full p-5 flex-wrap flex gap-4 '>

                {
                  image.map((items , index)=>(
                    <Cards key={index} image={items} />

                  ))
                }
              
              
              
              </div>
            

        </div>
   
   
   </>
  )
}

export default App
