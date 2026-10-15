import React from 'react'
import GunaLifeQuality from '../components/QualityStandard/GunaLifeQuality'
import QualityBadges from '../components/QualityStandard/Qualitybadges'
import QualityTesting from '../components/QualityStandard/Qualitytesting'
import QualityStandards from '../components/QualityStandard/Qualitystandards'

function Quality() {
  return (
    <div>
        <GunaLifeQuality/>
        <QualityTesting/>
        <QualityStandards/>
        <QualityBadges/>
    </div>
  )
}

export default Quality