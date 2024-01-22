import React from 'react'

const Avatar = ({ children, backgroundColor,px, py,color,borderRadius,fontSize, cursor,width,textDecoration}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}`,
    color: color || 'black',
    borderRadius,
    width,
    textDecoration:"none",
    fontSize,
    textAlign: 'center',
    cursor: cursor || null
  }
  return (
    <div style={style}>
      { children }
    </div>
  )
}

export default Avatar
