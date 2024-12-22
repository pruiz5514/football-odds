import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Card from '../components/Card'
import { EventsService } from '../infrastructure/services/events.services'
import { IEventDayResponse } from '../core/get-eventDay-response.dto'
import Pagination from '../components/Pagination'

const useEventsService = new EventsService()

const Home = () => {
  const [dayEvents, setDayEvents] = useState<IEventDayResponse>();

  // useEffect(()=>{
  //   const getDayEvents = async () => {
  //     setDayEvents( await useEventsService.findAllProjects('list?page=2'))
  //   }
  //   getDayEvents();
  // },[])

  return (
    <Layout>
        <h1 className='text-2xl font-bold text-center'>Pronostico del dia</h1>
        <section className='py-4 flex flex-col gap-5 flex-grow'>
          {dayEvents?.matches.map(event => (
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