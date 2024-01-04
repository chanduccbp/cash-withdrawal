// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  deductAmount = id => {
    const {denominationsList} = this.props
    this.setState(prevState => {
      const filteredAmount = denominationsList.filter(each => each.id === id)
      return {amount: prevState.amount - filteredAmount[0].value}
    })
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          <div className="cont-1">
            <span className="span-1">s</span>
            <p className="para">Sarah Williams</p>
          </div>
          <div className="cont-2">
            <p className="para-1">Your Balance</p>
            <div>
              <p className="amount-para">{amount}</p>
              <span>In Rupees</span>
            </div>
          </div>
          <div className="cont-3">
            <p className="withdraw-para">Withdraw</p>
            <p className="para-2">CHOOSE SUM (IN RUPEES)</p>
            <ul className="butt-container">
              {denominationsList.map(eachAmount => (
                <DenominationItem
                  amountDetails={eachAmount}
                  key={eachAmount.id}
                  deductAmount={this.deductAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
