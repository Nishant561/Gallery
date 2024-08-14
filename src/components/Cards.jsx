import React from 'react'
import Tag from './Tag'
function Cards({image}) {
const imageTag = image.tags.split(',')


    
  return (
    <>
        <div className='w-[355px]  border-2 shadow-md pb-3'>
                    <img src={image.webformatURL}
                          className='w-full h-[53%] object-cover' />

                    <div className='flex flex-col items-start p-5'>
                              <h3 className='font-semibold text-xl mb-4' style={{color: 'purple',
                              }}>Photo By {image.user}</h3>

                              <p> <strong>Views: </strong>{image.views}</p>
                              <p> <strong>Downloads: </strong>{image.downloads}</p>
                              <p> <strong>Likes: </strong>{image.likes}</p>

                              <div className='mt-3 flex flex-wrap gap-1'>

                                    {

                                           imageTag.map((items,index)=>(
                                            <Tag key={index} text={items} />
                                           ))

                                    }
                        
                        

                              </div>
                    </div>      

                    
              </div>
    </>
  )
}

export default Cards
