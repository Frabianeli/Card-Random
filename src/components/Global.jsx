import React, { useState } from 'react'
import QuoteBox from './QuoteBox'
import users from '../json/users.json'

const arrayColors =[
    '#780CF6', '#361AF4', '#98377E', '#FF0024', '#BC04DF',
     '#23AC73', '#083012', '#C44752', '#E2A809', '#10A29B',
      '#464F13', '#733A06', '#537D8B', '#9E1A12', '#95E80C',
      '#FF4206', '#044011'
  ]

const Global = () => {

    const getElementRandom = array =>{
        const i = createNumberRandom(array)
        return array[i]
    }
      
      const createNumberRandom = array => {
        return Math.floor(Math.random() * array.length)
      }
      
      
      
      const [usersRandom, setUserRandom] = useState(getElementRandom(users))
      const [colorsRandom, setColorRandom] = useState(getElementRandom(arrayColors))


      const change = () =>{
        setUserRandom(getElementRandom(users))
        setColorRandom(getElementRandom(arrayColors))
      }
  return (
    <div className='Global' style={{backgroundColor: colorsRandom}}>
        <QuoteBox 
            users={usersRandom}
            colors={colorsRandom}
            change={change}
        />
    </div>
  )
}

export default Global