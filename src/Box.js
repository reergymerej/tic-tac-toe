import React, { PropTypes } from 'react'
import './Box.css'

const classes = {
  empty: 'empty',
  x: 'x',
  o: 'o',
}

const Box = (props) => {
  const clickable = props.canClick ? 'clickable' : ''
  const className = `box ${classes[props.type]} ${clickable}`
  function handleClick() {
    props.onClick(props.id)
  }
  const onClick = props.canClick
    ? handleClick
    : undefined
  return (
    <div
      className={className}
      onClick={onClick}
    />
  )
}

Box.propTypes = {
  type: PropTypes.oneOf(['empty', 'x', 'o']),
  canClick: PropTypes.bool,
  onClick: PropTypes.func,
}

Box.defaultProps = {
  type: 'empty',
}

export default Box
