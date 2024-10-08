import React from 'react'

export const Classroom = () => {
    return (
        <div className="embed-responsive embed-responsive-16by9 d-flex justify-content-center">
            <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/XG59_t52vcI?si=FoBoS7g4JPYproAm"
                allowFullScreen
                style={{ width: "100%", height: "500px" }}
            ></iframe>
        </div>
    )
}
