import React from 'react'
import { Title } from './Title'
import { getAgentList } from '@/services';

export const OurAgents = async () => {
  const agents = await getAgentList();

  console.log(agents)
  return (
    <div className="w-[80%] mx-auto pb-28">
        <Title title='Nuestros asesores inmobiliarios' />
    </div>
  )
}
