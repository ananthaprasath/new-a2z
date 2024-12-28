import React from 'react'
import { GamingService, WhyChooseGaming, GamingFAQ, GamingTimeline } from './JsonData'
import ServiceHome from '../ServiceHome'
import WhyChoose from '../WhyChoose'
import SolutionFaq from '../SolutionFaq'
import Timeline from '../Timeline'

const Service = () => {
  return (
    <div>
      <ServiceHome data={GamingService} />
      <Timeline data={GamingTimeline}/>

      <WhyChoose data={WhyChooseGaming} />
      <SolutionFaq data={GamingFAQ}/>

    </div>
  )
}

export default Service
