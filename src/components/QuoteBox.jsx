import React from 'react'

const QuoteBox = ({users, colors, change}) => {
  return (
    <div className='QuoteBox' style={{color: colors}}>
        <div className='Container'>
        <i class="fa-solid fa-bookmark" style={{color: colors}}></i>
        <p>{users.quote}</p>
        </div>
        
        <h2>{users.author}</h2>
        
        <div className='ContainerButton'>
            <div>
                <button style={{backgroundColor: colors}} onClick={change}>
                    <i class="fa-solid fa-angle-right"></i>
                </button>
            </div>
        </div>
    </div>
  )
}

export default QuoteBox