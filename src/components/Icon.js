import React from 'react'
import Icons from '../icons'

const Icon = ({ name }) => {
  const Glyph = Icons[name]
  return <Glyph />
}

export default Icon
