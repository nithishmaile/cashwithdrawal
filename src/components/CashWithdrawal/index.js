// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const denominationsList = this.state
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="top-section">
            <div className="profile-container">
              <h1 className="profile">S</h1>
            </div>
            <h1 className="user-name">Sarah Williams</h1>
          </div>
          <div className="bottom-section">
            <h1 className="yourBalance-heading">Your Balance</h1>
            <div className="balance-container">
              <h1 className="balanceAmount-heading">{balance}</h1>
              <p className="inRupees-heading">In Rupees</p>
            </div>
          </div>
          <h1 className="balanceAmount-heading">Withdraw</h1>
          <h1 className="yourBalance-heading">CHOOSE SUM (IN RUPEES)</h1>
          <ul className="list-container">
            {denominationsList.map(eachObject => (
              <DenominationItem
                DenominationsDetails={eachObject}
                key={eachObject.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
