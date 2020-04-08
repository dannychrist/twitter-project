import React from 'react'

const Spacer = ({ size, inline }) => {
  return (
    <span
      style={{
        width: size,
        height: size,
        display: inline ? 'inline-block' : 'block',
      }}
    />
  )
}

export default Spacer
