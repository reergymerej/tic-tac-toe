import React, { PropTypes } from 'react'
import './Box.css'

const classes = {
  empty: 'empty',
  x: 'x',
  o: 'o',
}

function getPosition(top, left, bottom, right) {
  const y = top
    ? 'top'
    : (bottom ? 'bottom' : '')
  const x = left
    ? 'left'
    : (right ? 'right' : '')
  return `${x} ${y}`
}

const Box = (props) => {
  const { top, left, bottom, right } = props
  const position = getPosition(top, left, bottom, right)
  const className = `box ${classes[props.type]} ${position}`
  function handleClick() {
    props.onClick(props.id)
  }
  return (
    <div
      className={className}
      onClick={handleClick}
    />
  )
}

Box.propTypes = {
  type: PropTypes.oneOf(['empty', 'x', 'o']),
  onClick: PropTypes.func.isRequired,
}

Box.defaultProps = {
  type: 'empty',
}

export default Box
