import React from 'react'

function TrackingForm({submitHandler}) {
    return (
        <>
            <h1>React Tracking </h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <input type="text" name="tracking" className="form-control" />
                </div>
                <button type="submit" value="Track" className="btn btn-primary"> Track </button>
            </form>
        </>
    )
}

export default TrackingForm;