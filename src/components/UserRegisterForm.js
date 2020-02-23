import React from 'react';

const UserRegisterForm = (props) => {
  return(
    
    <form>
      <div class="row">
    <div class="col">
      <input type={props.fieldL.toLowerCase() === "password" ? "password" : "text" } class="form-control" placeholder={props.fieldL}/>
    </div>
    <div class="col">
      <input type={props.fieldR.toLowerCase() === "password" ? "password" : "text" } class="form-control" placeholder={props.fieldR}/>
    </div>



  </div>
</form>
  )
}
export default UserRegisterForm