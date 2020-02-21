import React, {useState} from 'react';




const CounterButton = (prop) => {

    const [state, setState] = useState(1)

    const increaseCount =() =>{
        let maxValue = prop.quantity;
        if (state >= prop.quantity) {
            setState(maxValue)
        } else {
            setState (state + 1)
        }
    }


    const decreaseCount = () => {
        if (state <= 1) {
            setState(state)
        } else {
            setState (state - 1)
        }
    }
        
    return (
        <div>

<button onClick ={decreaseCount} type="button" class="btn btn-info">-</button>
     <input type ="number" value={state} style={{textAlign:'center'}}></input>
     <button onClick ={increaseCount} type="button" class="btn btn-info" style={{textAlign:'center'}}>+</button>   
        </div>
    );
}


export default CounterButton;

