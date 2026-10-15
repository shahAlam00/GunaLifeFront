import React from 'react'
import ScienceHeroSection from '../components/science/ScienceHeroSection'
import ScientificAdvisors from '../components/science/ScientificAdvisors'
import ScienceSection from '../components/science/ScienceSection'
import GunaLifeResearch from '../components/science/GunaLifeResearch'
import GunaLifeScienceProof from '../components/science/GunaLifeScienceProof'
import GunaLifeIngredients from '../components/science/GunaLifeIngredients'
import GunaLifeClinicalTrials from '../components/science/GunaLifeClinicalTrials'
import GunaLifeLongevityStudy from '../components/science/GunaLifeLongevityStudy'
import GunaLifeProducts from '../components/science/GunaLifeProducts'
import GunaLifeTrustBar from '../components/science/GunaLifeTrustBar'

function SciencePage() {
  return (
    <div>
      <ScienceHeroSection/>
      <ScientificAdvisors/>
      <ScienceSection/>
      <GunaLifeResearch/>
      <GunaLifeScienceProof/>
      <GunaLifeIngredients/>
      <GunaLifeClinicalTrials/>
      <GunaLifeLongevityStudy/>
      <GunaLifeProducts/>
      <GunaLifeTrustBar/>
    </div>
  )
}

export default SciencePage