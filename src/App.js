import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.player = React.createRef();
  }

  doSomething() {
    this.player.current.play(); // make use of the player and call methods
  }

  render() {
    return (
      <Player
        onEvent={event => {
          if (event === 'load') this.doSomething(); // check event type and do something
        }}
        ref={this.player}
        autoplay={true}
        loop={true}
        controls={true}
        src="https://assets2.lottiefiles.com/private_files/lf30_crs0jiwe.json"
        style={{ height: '200px', width: '200px' }}
      ></Player>
    );
  }
}

export default App;