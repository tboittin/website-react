import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './profile.css'

const Profile = () => {
    return (
        <React.Fragment>
            {/* <h2>Profile</h2> */}
            <div className="text-center p-0">
                <p className="profile">
                    Former agronomy engineer who decided to give his programming dreams a go. <br />
                    I like to create, experiment and evolve. I learned web through MOOCs.
                </p>
            </div>
        </React.Fragment>
    )
}

export default Profile