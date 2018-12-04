import React from 'react'
import Icons from '../icons'

const Icon = ({ name, style, className }) => {
  const Glyph = Icons[name]
  return <Glyph style={style} className={className} />
}

export default Icon
