import React from 'react'

const Modal = (prop) => {
    return (
        <div class="modal fade" id={prop.target} tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">{prop.title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                {prop.children}
            </div>
            </div>
        </div>
        </div>
    )
}

export default Modal
