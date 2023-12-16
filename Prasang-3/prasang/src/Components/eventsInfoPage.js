import React from 'react'
import PropTypes from 'prop-types'; 

const eventsInfoPage = () => {
  return (
    <div>
      
    </div>
  )
}
eventsInfoPage.propTypes = {
    eventName: PropTypes.string.isRequired,
    eventImgSrc: PropTypes.string.isRequired,
    eventRule: PropTypes.string.isRequired,
    eventLink: PropTypes.string.isRequired,
  };
export default eventsInfoPage
