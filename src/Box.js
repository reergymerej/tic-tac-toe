import React, { PropTypes } from 'react'
import './Box.css'

const classes = {
  empty: 'empty',
  x: 'x',
  o: 'o',
}

const Box = (props) => {
  const className = `box ${classes[props.type]}`
  function handleClick() {
    props.onClick && props.onClick(props.id)
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
  onClick: PropTypes.func,
}

Box.defaultProps = {
  type: 'empty',
}

export default Box
