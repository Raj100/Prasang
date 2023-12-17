import React from 'react'
import Navbar from '../Components/Navbar'
import EventsInfoPage from '../Components/EventsInfoPage'
import CodeCombatImg from "../Assets/Code Combat.png"
function codeCombat() {
  return (
    <div>
            <EventsInfoPage
        eventName="Code Combat"
        eventImgSrc={CodeCombatImg}
          eventLink=""
          eventRules=""
          eventPrize="INR 1000"
          eventFile=""
      />
    </div>
  )
}

export default codeCombat
