import { connect } from 'react-redux';
import App from '../App';
import { moveObjects, startGame, shoot } from '../store/actions';

const mapStateToProps = state => ({
  angle: state.angle,
  gameState: state.gameState
});

const mapDispatchToProps = dispatch => ({
  moveObjects: mousePosition => {
    dispatch(moveObjects(mousePosition));
  },
  startGame: () => {
    dispatch(startGame());
  },
  shoot: mousePosition => dispatch(shoot(mousePosition))
});

const Game = connect(mapStateToProps, mapDispatchToProps)(App);

export default Game;
