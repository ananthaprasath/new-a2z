import React from 'react'
import { ToursAndTravels, WhyChooseTravel,TravelFAQ, TravelTimeline } from './JsonData'
import ServiceHome from '../ServiceHome'
import WhyChoose from '../WhyChoose'
import SolutionFaq from '../SolutionFaq'
import Timeline from '../Timeline'
const Service = () => {
  return (
    <div>
      
      <ServiceHome data={ToursAndTravels} />

      <Timeline data={TravelTimeline} />
      <WhyChoose data={WhyChooseTravel} />
      
      <SolutionFaq data={TravelFAQ} />

    </div>
  )
}

export default Service
