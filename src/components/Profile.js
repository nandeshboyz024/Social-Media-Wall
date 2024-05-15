import React from "react";
import MenuBar from "./MenuBar";
import "./profile.css";

const Profile = () => {
    return (
            <div>
            <MenuBar />
            <div className="profile-container">
            <div className="profile-info">
                <h2>Profile Information</h2>
                <div className="info-item">
                    <span className="label">Name:</span>
                    <span className="value">John Doe</span>
                </div>
                <div className="info-item">
                    <span className="label">User ID:</span>
                    <span className="value">123456</span>
                </div>
                <div className="info-item">
                    <span className="label">Mobile Number:</span>
                    <span className="value">123-456-7890</span>
                </div>
                <div className="info-item">
                    <span className="label">Friends:</span>
                    <span className="value">9</span>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Profile;
