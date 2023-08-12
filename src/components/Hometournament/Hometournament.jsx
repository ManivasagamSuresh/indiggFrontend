import React from 'react'

import HometournamentCard from '../HomeTournamentCard/HometournamentCard'

function Hometournament() {
  return (
    <div className='flex flex-col items-center justify-center my-8 md:flex-row md:flex-wrap md:justify-around  md:gap-8  md:my-2'>
       {
        [...Array(4)].map((tournament)=>{
            return <HometournamentCard tournament= {tournament}/>
        })
       } 
    </div>
  )
}

export default Hometournament