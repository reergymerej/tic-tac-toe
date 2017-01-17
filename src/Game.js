import React, { Component, PropTypes } from 'react';
import Board from './Board'
import BoardSizePicker from './BoardSizePicker'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './redux/reducers'

class Game extends Component {
  render() {
    return (
      <div className="Game">
        { !this.props.started &&
          <BoardSizePicker onSelectSize={this.props.selectBoardSize} />
        }
        { this.props.started && <Board /> }
      </div>
    )
  }
}

Game.propTypes = {
  started: PropTypes.bool,
  selectBoardSize: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
