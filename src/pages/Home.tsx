import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { EventsService } from '../infrastructure/services/events.services'
import { IEventDayResponse } from '../core/get-eventDay-response.dto'
import Pagination from '../components/Pagination'
import { useSearchParams } from 'react-router-dom'

const useEventsService = new EventsService()

const Home = () => {
  const [searchParams] = useSearchParams();
  const [dayEvents, setDayEvents] = useState<IEventDayResponse>();

  const page = parseInt(searchParams.get('page') ?? '1');


  useEffect(()=>{
    const getDayEvents = async () => {
      setDayEvents(await useEventsService.findAllProjects(`list?page=${page}`))
    }
    getDayEvents();
  },[page])

  const events = dayEvents?.matches.filter(match => !match.is_finished).sort((a, b) => b.prediction_probability - a.prediction_probability);

  return (
    <Layout>
        <h1 className='text-2xl font-bold text-center'>Pronostico del dia</h1>
        <section className='py-4 flex flex-col gap-5 flex-grow'>
          {events?.map(event => (
            <Card key={event.id} event={event}/>
          ))}
        </section>

        <div className='mt-auto w-full'>
          <Pagination paginationData={dayEvents?.pagination}/>
        </div>
        
    </Layout>
  )
}

export default Home