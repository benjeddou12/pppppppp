import React from 'react'
import Card from './Card'

const Players = () => {
    let players=[
        {
            name:"Ronaldo",
            age:38,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRipHy4eZddF2bCOpA5Afi4AOOtr8chWbixfw&s"
        },
        {
            name:"Messi",
            age:62,
            image:"https://hips.hearstapps.com/hmg-prod/images/lionel-messi-celebrates-after-their-sides-third-goal-by-news-photo-1686170172.jpg?crop=0.66653xw:1xh;center,top&resize=640:*"
        },
        {
            name:"Kroos",
            age:25,
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/CSKA-RM18_%287%29_%28cropped%29.jpg/220px-CSKA-RM18_%287%29_%28cropped%29.jpg"
        },
    ]
  return (
    <div className='list'>
      {players.map(el=><Card el={el} />)}
    </div>
  )
}

export default Players
