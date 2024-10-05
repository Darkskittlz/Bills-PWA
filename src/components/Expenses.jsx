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
            <tr>
              <td>🏠</td>
              <td>Rent (Tristan)</td>
              <td>$1495</td>
              <td>1st</td>
            </tr>
            <tr>
              <td>📺</td>
              <td>YouTube</td>
              <td>$16</td>
              <td>2nd</td>
            </tr>
            <tr>
              <td>📶</td>
              <td>Internet</td>
              <td>$82</td>
              <td>4th</td>
            </tr>
            <tr>
              <td>💻</td>
              <td>Microsoft</td>
              <td>$2</td>
              <td>8th</td>
            </tr>
            <tr>
              <td>📺</td>
              <td>HBO</td>
              <td>$17</td>
              <td>9th</td>
            </tr>
            <tr>
              <td>📺</td>
              <td>Discord Nitro (Alice)</td>
              <td>$3</td>
              <td>10th</td>
            </tr>
            <tr>
              <td>📺</td>
              <td>Prime Ad-Free</td>
              <td>$3</td>
              <td>10th</td>
            </tr>
            <tr>
              <td>📺</td>
              <td>Google Storage (Alice)</td>
              <td>$10</td>
              <td>10th</td>
            </tr>
            {/* <tr> */}
            {/*   <td>🍿</td> */}
            {/*   <td>Netflix</td> */}
            {/*   <td>$15.50</td> */}
            {/*   <td>10th</td> */}
            {/* </tr> */}
            <tr>
              <td>🕹️</td>
              <td>Nintendo </td>
              <td>$4</td>
              <td>11th</td>
            </tr>
            <tr>
              <td>✒️</td>
              <td>Inkdrop (Tristan)</td>
              <td>$5</td>
              <td>12th</td>
            </tr>
            <tr>
              <td>🍋</td>
              <td>Lemonade Insurance</td>
              <td>$32</td>
              <td>12th</td>
            </tr>
            <tr>
              <td>💳</td>
              <td>Geico</td>
              <td>$181</td>
              <td>17th</td>
            </tr>
            <tr>
              <td>💳</td>
              <td>Discover (Alice) </td>
              <td>$95</td>
              <td>17th</td>
            </tr>
            <tr>
              <td>💳</td>
              <td>Kia Financing</td>
              <td>$534</td>
              <td>17th</td>
            </tr>
            <tr>
              <td>💳</td>
              <td>Capital One</td>
              <td>$25</td>
              <td>19th</td>
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
            <tr>
              <td>📺</td>
              <td>Twitch (Alice) </td>
              <td>$5.99 </td>
              <td>22nd</td>
            </tr>
            <tr>
              <td>📺</td>
              <td>Amazon Prime</td>
              <td>$15</td>
              <td>25th</td>
            </tr>
          </table>
          <table>
            <tr>
              <th>💵 Total Bills 💵</th>
            </tr>
            <tr>
              <td>$2,654</td>
            </tr>
          </table>
        </TableContainer>
      </ExpensesContainer>
    </>
  )
}

export default Expenses
