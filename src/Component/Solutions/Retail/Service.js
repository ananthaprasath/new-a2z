import React from 'react'
import { RetailAndEcommerce, WhyChooseRetail,RetailFAQ, RetailTimeline } from './jsonData'
import ServiceHome from '../ServiceHome'
import WhyChoose from '../WhyChoose'
import SolutionFaq from '../SolutionFaq'
import Timeline from '../Timeline'
const Service = () => {
  return (
    <div>
      
      <ServiceHome data={RetailAndEcommerce} />

      <Timeline data={RetailTimeline} />
      <WhyChoose data={WhyChooseRetail} />
      
      <SolutionFaq data={RetailFAQ} />

    </div>
  )
}

export default Service
