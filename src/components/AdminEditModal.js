import React from 'react'

const AdminEditModal = (props) => {

  return(
    <div class="modal" id={"modal"+props.product.id} tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
      
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Model</label>
          <input type="text" class="form-control" id={"modal"+props.product.id} aria-describedby="emailHelp" placeholder={props.product.model}/>
        </div>
      </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AdminEditModal