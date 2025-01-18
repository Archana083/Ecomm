import React from 'react'

const Loader = () => {
    return (
        <>
<div className='d-flex justify-content-center align-item-center my-5'>
<button className="btn btn-warning" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                Loading...
            </button>

</div>
           
        </>
    )
}

export default Loader