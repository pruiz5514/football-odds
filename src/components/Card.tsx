import React from 'react'

import { Match } from '../core/get-eventDay-response.dto'
import OddData from './OddData';

interface ICardProps {
    event: Match;
    key: string
}

const prediction = (result: string) => {
    if(result === '1'){
        return <span>Gana Local</span>
    } else if(result === '2'){
        return <span>Gana Visitante</span>
    } else{
        return <span>Empate</span>
    }
}

const Card: React.FC<ICardProps>= ({event, key}) => {
  return (
    <article className='w-full bg-lightGray h-36 px-4 flex py-2 rounded lg:h-20' key={key}>
        <div className='w-1/2 h-full flex flex-col justify-center'>
            <span>{event.home_team}</span>
            <span>{event.away_team}</span>
        </div>
        <div className='w-1/2 h-full flex flex-col justify-center gap-2 lg:flex-row'>
            <OddData>
                {prediction(event.prediction)}
            </OddData>
            <OddData>
                Cuota: {event.prediction_odd}
            </OddData>
            <OddData>
                Probabiidad: {event.prediction_probability}
            </OddData>
        </div>
    </article>
  )
}

export default Card