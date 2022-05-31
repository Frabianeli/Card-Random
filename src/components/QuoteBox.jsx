import React from 'react'

const QuoteBox = ({users, colors, change}) => {
  return (
    <div className='QuoteBox' style={{color: colors}}>
        <p>{users.quote}</p>
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