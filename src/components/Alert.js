import React from 'react'

let capitalize = (message)=> {
    return message.charAt(0).toUpperCase() + message.slice(1);
}

function Alert(props) {
  return (
    <div style={{height:"50px"}}>
      {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
              <strong>{capitalize(props.alert.type)}</strong> {`: ${props.alert.message}`}
        </div>}
    </div>
  )
}

export default Alert