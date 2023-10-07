import React from 'react'

import './CreatorLinks.css'

import { faYoutube, faTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CreatorLinks = ({ creatorinfo }) => {
  return (
    <div className="creator-links">
        {(creatorinfo.youtube !== '') && (
            <a href={creatorinfo.youtube}>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
        )}

        {(creatorinfo.twitter !== '') && (
            <a href={creatorinfo.twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
        )}

        {(creatorinfo.instagram !== '') && (
            <a href={creatorinfo.instagram}>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
        )}

        {(creatorinfo.tiktok !== '') && (
            <a href={creatorinfo.tiktok}>
              <FontAwesomeIcon icon={faTiktok} />
            </a>
        )}
    </div>
  )
}

export default CreatorLinks