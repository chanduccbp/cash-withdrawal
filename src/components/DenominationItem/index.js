// Write your code here
import './index.css'

const DenominationItem = props => {
  const {amountDetails, deductAmount} = props
  const {value, id} = amountDetails

  const onDeduct = () => {
    deductAmount(id)
  }

  return (
    <li className="list-item">
      <button className="deduct-button" onClick={onDeduct} type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
