import React from 'react'

const CheckoutProgressBar = (prop) => {
    const progressWidth = () => {
        if(prop.progress === 0) { return "33.33%"}
        else if(prop.progress === 1) { return "66.66%"}
        else {return "100%"}
    }
    const style = {
        width: progressWidth(),
        transition: "width .3s ease"
    }

    return(
        <div class="mb-4">
            <div className="progress rounded-0">
                <div className="progress-bar" style={style} role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <ul className="list-group list-group-horizontal row m-0">
                <li className="list-group-item rounded-0 border-primary text-center col-4">
                    <strong class="text-primary">Shipping Details</strong>
                </li>
                <li className={`list-group-item rounded-0 ${prop.progress >= 1 && `border-primary`} text-center col-4`}>
                    <strong class={prop.progress >= 1 ? "text-primary" : "text-secondary"}>Payment</strong>
                </li>
                <li className={`list-group-item rounded-0 ${prop.progress >= 2 && `border-primary`} text-center col-4`}>
                    <strong class={prop.progress >= 2 ? "text-primary" : "text-secondary"}>Confim & Place Ordder</strong>
                </li>
            </ul>
        </div>
    )
}

export default CheckoutProgressBar