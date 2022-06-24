

import React from 'react'

const ReviewModal = () => {

    return (
        <>

                <button type="button" className="btn btn-primary rounded-circle py-2 position-relative top-0 start-50 translate-middle" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <i className="fas fa-plus-circle"></i>
                </button>

              
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                                <label htmlFor="floatingTextarea2">Comments</label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default ReviewModal