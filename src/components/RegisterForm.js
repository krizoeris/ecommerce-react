import React from 'react';
import HalfDivInput from './HalfDivInput;'

const RegisterForm = () => {
  return(
    <form>
  <div class="row">
    <HalfDivInput placeholder={'First name'} />
    <div class="col">
      <input type="text" class="form-control" placeholder="Last name"/>
    </div>
  </div>
</form>
  )
}
export default RegisterForm