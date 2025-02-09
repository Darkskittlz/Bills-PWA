import React, { useEffect, useState } from 'react'
import { ExpensesContainer, TableContainer } from '../Styles/Styles'
import { Checkbox } from '@mui/material'
import "../Styles/App.css";


const Expenses = () => {
  const savedDoneRows = JSON.parse(localStorage.getItem('doneRows')) || [];
  const [doneRows, setDoneRows] = useState(savedDoneRows);

  useEffect(() => {
    // Save the state to localStorage whenever it changes
    localStorage.setItem('doneRows', JSON.stringify(doneRows));
  }, [doneRows]);


  const handleClick = (index) => {
    setDoneRows((prevState) =>
      prevState.includes(index)
        ? prevState.filter((id) => id !== index) // Remove if already checked
        : [...prevState, index] // Add if not checked
    );
  }


  return (
    <>
      <ExpensesContainer>
        <h1>Bills</h1>
        <TableContainer>
          <table>
            <tr>
              <th>Status</th>
              <th>Type</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Due</th>
            </tr>
            <tr className={doneRows.includes(0) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(0)} sx={{ color: "white" }} size="small" /></td>
              <td>🏠</td>
              <td>Rent (Tristan)</td>
              <td>$1495</td>
              <td>1st</td>
            </tr>
            <tr className={doneRows.includes(1) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(1)} sx={{ color: "white" }} size="small" /></td>
              <td>📺</td>
              <td>YouTube</td>
              <td>$16</td>
              <td>2nd</td>
            </tr>
            <tr className={doneRows.includes(2) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(2)} sx={{ color: "white" }} size="small" /></td>
              <td>📶</td>
              <td>Internet</td>
              <td>$65</td>
              <td>4th</td>
            </tr>
            <tr className={doneRows.includes(3) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(3)} sx={{ color: "white" }} size="small" /></td>
              <td>💳</td>
              <td>Quicksilver (Alice)</td>
              <td>$25</td>
              <td>4th</td>
            </tr>
            <tr className={doneRows.includes(4) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(4)} sx={{ color: "white" }} size="small" /></td>
              <td>📺</td>
              <td>Google Storage (Alice)</td>
              <td>$9.99</td>
              <td>5th</td>
            </tr>
            <tr className={doneRows.includes(5) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(5)} sx={{ color: "white" }} size="small" /></td>
              <td>📺</td>
              <td>Amazon Prime</td>
              <td>$7</td>
              <td>7th</td>
            </tr>
            <tr className={doneRows.includes(6) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(6)} sx={{ color: "white" }} size="small" /></td>
              <td>💻</td>
              <td>Microsoft</td>
              <td>$2</td>
              <td>8th</td>
            </tr>
            <tr className={doneRows.includes(7) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(7)} sx={{ color: "white" }} size="small" /></td>
              <td>📺</td>
              <td>HBO</td>
              <td>$17</td>
              <td>9th</td>
            </tr>
            <tr className={doneRows.includes(8) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(8)} sx={{ color: "white" }} size="small" /></td>
              <td>📺</td>
              <td>Prime Ad-Free</td>
              <td>$3</td>
              <td>10th</td>
            </tr>
            {/* <tr className={doneRows.includes(0) ? 'strike' : ''}>
<td><Checkbox onClick={() => handleClick(0)}sx={{color: "white"}}/></td> */}
            {/*   <td>🍿</td> */}
            {/*   <td>Netflix</td> */}
            {/*   <td>$15.50</td> */}
            {/*   <td>10th</td> */}
            {/* </tr> */}
            <tr className={doneRows.includes(9) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(9)} sx={{ color: "white" }} size="small" /></td>
              <td>🕹️ </td>
              <td>Nintendo </td>
              <td>$4</td>
              <td>11th</td>
            </tr>
            <tr className={doneRows.includes(10) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(10)} sx={{ color: "white" }} size="small" /></td>
              <td>🍋 </td>
              <td>Lemonade Insurance</td>
              <td>$32</td>
              <td>12th</td>
            </tr>
            <tr className={doneRows.includes(11) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(11)} sx={{ color: "white" }} size="small" /></td>
              <td>🎞️</td>
              <td>Capcut</td>
              <td>$8</td>
              <td>16th</td>
            </tr>
            <tr className={doneRows.includes(12) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(12)} sx={{ color: "white" }} size="small" /></td>
              <td>💳</td>
              <td>Geico</td>
              <td>$181</td>
              <td>17th</td>
            </tr>
            <tr className={doneRows.includes(13) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(13)} sx={{ color: "white" }} size="small" /></td>
              <td>💳</td>
              <td>Kia Financing</td>
              <td>$534</td>
              <td>17th</td>
            </tr>
            {/* <tr className={doneRows.includes(0) ? 'strike' : ''}>
<td><Checkbox onClick={() => handleClick(0)}sx={{color: "white"}}/></td> */}
            {/*   <td>💳</td> */}
            {/*   <td>Capital One - REI (Tristan)</td> */}
            {/*   <td>$29</td> */}
            {/*   <td>17th</td> */}
            {/* </tr> */}
            <tr className={doneRows.includes(14) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(14)} sx={{ color: "white" }} size="small" /></td>
              <td>🍏</td>
              <td>Apple </td>
              <td>$1</td>
              <td>19th</td>
            </tr>
            <tr className={doneRows.includes(15) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(15)} sx={{ color: "white" }} size="small" /></td>
              <td>📺</td>
              <td>Crunchyroll </td>
              <td>$12</td>
              <td>22nd</td>
            </tr>
            <tr className={doneRows.includes(16) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(16)} sx={{ color: "white" }} size="small" /></td>
              <td>📱</td>
              <td>Google Phone (Alice)</td>
              <td>$40</td>
              <td>26th</td>
            </tr>
            <tr className={doneRows.includes(17) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(17)} sx={{ color: "white" }} size="small" /></td>
              <td>💳</td>
              <td>Venture One (Alice)</td>
              <td>$25</td>
              <td>27th</td>
            </tr>
            <tr className={doneRows.includes(18) ? 'strike' : ''}>
              <td><Checkbox onClick={() => handleClick(18)} sx={{ color: "white" }} size="small" /></td>
              <td>💳</td>
              <td>Quicksilver (Tristan)</td>
              <td>$25</td>
              <td>27th</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>Car + Insurance</th>
              <th>Rent</th>
              <th>Total Bills</th>
            </tr>
            <tr className="align-start">
              <td>$715</td>
              <td>$1495</td>
              <td>$1007</td>
            </tr>
          </table>
          <table>
            <tr>
              <th><span className="strike"> Strike Through</span> = Paid</th>
            </tr>
          </table>
        </TableContainer >
      </ExpensesContainer >
    </>
  )
}

export default Expenses

