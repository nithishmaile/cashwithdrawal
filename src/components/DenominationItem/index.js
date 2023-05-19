// Write your code here
import './index.css'

const DenominationItem = props => {
  const {DenominationsDetails, updateBalance} = props
  const {value} = DenominationsDetails

  const getUpdateBalance = () => {
    updateBalance(value)
  }

  return (
    <li>
      <button type="button" className="button" onClick={getUpdateBalance}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
