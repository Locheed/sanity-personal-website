import React from 'react'
import {
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaTwitch,
  FaInstagram,
  FaLinkedin,
} from 'react-icons/fa'

const Icon = ({ icon }) => {
  switch (icon) {
    case 'icon-github':
      return <FaGithub size={48} />
    case 'icon-twitter':
      return <FaTwitter size={48} />
    case 'icon-twitch':
      return <FaTwitch size={48} />
    case 'icon-instagram':
      return <FaInstagram size={48} />
    case 'icon-youtube':
      return <FaYoutube size={48} />
    case 'icon-linkedin':
      return <FaLinkedin size={48} />
    default:
      return <></>
  }
}

export default Icon
