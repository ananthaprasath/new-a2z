import React from 'react'
import { RealEstate, WhyChooseUs, RealEstateFAQ,RealEstateTimeline } from './JsonData'
import ServiceHome from '../ServiceHome'
import WhyChoose from '../WhyChoose'
import SolutionFaq from '../SolutionFaq'
import Timeline from '../Timeline'

const Services = () => {
  return (
    <div>
        <ServiceHome data={RealEstate} />
        <Timeline data={RealEstateTimeline} />
        <WhyChoose data ={WhyChooseUs}/>
        <SolutionFaq data={RealEstateFAQ} />
      
    </div>
  )
}

export default Services
