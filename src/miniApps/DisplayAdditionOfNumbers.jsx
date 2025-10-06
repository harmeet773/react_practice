
import { addNums } from '.././Utils.jsx'

function DisplayAdditionOfNumbers() {
    return (
        <div>
            <h2>Display Addition of Numbers</h2>
            <p>The sum of 5 and 9 is: { addNums(5,9)   }</p>
        </div>
    );
}

export default DisplayAdditionOfNumbers;