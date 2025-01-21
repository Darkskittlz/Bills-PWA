import React from 'react'
import { ExpensesContainer, TableContainer } from '../Styles/Styles'


const Expenses = () => {
  return (
    <>
      <ExpensesContainer>
        <h1>Bills</h1>
        <TableContainer>
          <table>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Due</th>
            </tr>
            <tr class="strike">
              <td>🏠</td>
              <td>Rent (Tristan)</td>
              <td>$1495</td>
              <td>1st</td>
            </tr>
            <tr class="strike">
              <td>📺</td>
              <td>YouTube</td>
              <td>$16</td>
              <td>2nd</td>
            </tr>
            <tr class="strike">
              <td>📶</td>
              <td>Internet</td>
              <td>$65</td>
              <td>4th</td>
            </tr>
            <tr class="strike">
              <td>💳</td>
              <td>Quicksilver (Alice)</td>
              <td>$25</td>
              <td>4th</td>
            </tr>
            <tr class="strike">
              <td>📺</td>
              <td>Google Storage (Alice)</td>
              <td>$9.99</td>
              <td>5th</td>
            </tr>
            <tr class="strike">
              <td>💻</td>
              <td>Microsoft</td>
              <td>$2</td>
              <td>8th</td>
            </tr>
            <tr class="strike">
              <td>📺</td>
              <td>HBO</td>
              <td>$17</td>
              <td>9th</td>
            </tr>
            <tr class="strike">
              <td>📺</td>
              <td>Discord Nitro (Alice)</td>
              <td>$3</td>
              <td>10th</td>
            </tr>
            <tr class="strike">
              <td>📺</td>
              <td>Prime Ad-Free</td>
              <td>$3</td>
              <td>10th</td>
            </tr>
            {/* <tr> */}
            {/*   <td>🍿</td> */}
            {/*   <td>Netflix</td> */}
            {/*   <td>$15.50</td> */}
            {/*   <td>10th</td> */}
            {/* </tr> */}
            <tr class="strike">
              <td>🕹️ </td>
              <td>Nintendo </td>
              <td>$4</td>
              <td>11th</td>
            </tr>
            <tr class="strike">
              <td>🍋 </td>
              <td>Lemonade Insurance</td>
              <td>$32</td>
              <td>12th</td>
            </tr>
            <tr class="strike">
              <td>💳 </td>
              <td>Discover Alice (Jan 2025)</td>
              <td>$190</td>
              <td>14th</td>
            </tr>
            <tr class="strike">
              <td>🎞️</td>
              <td>Capcut</td>
              <td>$8</td>
              <td>16th</td>
            </tr>
            <tr class="strike">
              <td>💳</td>
              <td>Geico</td>
              <td>$181</td>
              <td>17th</td>
            </tr>
            <tr class="strike">
              <td>💳</td>
              <td>Kia Financing</td>
              <td>$534</td>
              <td>17th</td>
            </tr>
            <tr class="strike">
              <td>💳</td>
              <td>Capital One - REI (Tristan)</td>
              <td>$29</td>
              <td>17th</td>
            </tr>
            <tr>
              <td>🍏</td>
              <td>Apple </td>
              <td>$1</td>
              <td>19th</td>
            </tr>
            <tr>
              <td>📺</td>
              <td>Crunchyroll </td>
              <td>$12</td>
              <td>22nd</td>
            </tr>
            <tr class="strike">
              <td>📺</td>
              <td>Amazon Prime</td>
              <td>$15</td>
              <td>25th</td>
            </tr>
            <tr>
              <td>📱</td>
              <td>Google Phone (Alice)</td>
              <td>$40</td>
              <td>26th</td>
            </tr>
            <tr>
              <td>💳</td>
              <td>Venture One (Alice)</td>
              <td>$25</td>
              <td>27th</td>
            </tr>
            <tr>
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
              <td>$948</td>
            </tr>
          </table>
          <table>
            <tr>
              <th><span className="strike"> Strike Through</span> = Paid for January</th>
            </tr>
          </table>
        </TableContainer>
      </ExpensesContainer>
    </>
  )
}

export default Expenses
