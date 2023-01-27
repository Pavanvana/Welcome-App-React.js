// Write your code here
import './index.css'

import {Component} from 'react'

class Welcome extends Component {
  state = {
    isSubscribed: true,
  }

  onClickSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  buttonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribe' : 'Subscribed'
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        <button
          onClick={this.onClickSubscribe}
          className="button"
          type="button"
        >
          {this.buttonText()}
        </button>
      </div>
    )
  }
}
export default Welcome
