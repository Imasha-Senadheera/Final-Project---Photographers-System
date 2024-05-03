import React from 'react';
import './AddPhoto.css';

const AddPhoto = () => {
  return (
    <div className="profile-container">
      {/* Profile Content */}
      <div className="profile-content"></div>

      {/* Profile Picture */}
      <img className="profile-picture" src="https://via.placeholder.com/44x44" alt="Profile Picture" />

      {/* Profile Name */}
      <div className="profile-name">Pasindu Maneesha</div>

      {/* Online Status Indicator */}
      <div className="online-status">
        <div className="online-dot"></div>
      </div>

      {/* Dashboard Title */}
      <div className="dashboard-title">Dashboard</div>

      {/* Horizontal Divider */}
      <div className="horizontal-divider" style={{ top: '128px' }}></div>

      {/* Vertical Divider */}
      <div className="vertical-divider" style={{ left: '255px', top: '128px' }}></div>

      {/* Section Background */}
      <div className="section-background" style={{ top: '247px' }}></div>

      {/* Section Titles */}
      <div className="section-title" style={{ left: '76px', top: '147px' }}>Overview</div>
      <div className="section-title" style={{ left: '76px', top: '202px' }}>My Profile</div>
      <div className="section-title" style={{ left: '76px', top: '258px' }}>Add photos</div>
      <div className="section-title" style={{ left: '76px', top: '314px' }}>Reviews</div>
      <div className="section-title" style={{ left: '76px', top: '359px' }}>Budget Calculator</div>

      {/* Section Boxes */}
      <div className="section-box" style={{ left: '372px', top: '671px' }}></div>
      <div className="section-box" style={{ left: '705px', top: '669px' }}></div>
      <div className="section-box" style={{ left: '372px', top: '764px' }}></div>
      <div className="section-box" style={{ left: '705px', top: '764px' }}></div>

      {/* Labels */}
      <div className="label" style={{ left: '389px', top: '687px' }}>select</div>
      <div className="label" style={{ left: '389px', top: '781px' }}>Select</div>
      <div className="label" style={{ left: '705px', top: '738px' }}>Contact Number</div>
      <div className="label" style={{ left: '372px', top: '854px' }}>Min Price</div>
      <div className="label" style={{ left: '705px', top: '854px' }}>Max Price</div>

      {/* Buttons */}
      <div className="button" style={{ left: '722px', top: '780px', color: '#9FA2B4' }}>0771234567</div>
      <div className="button" style={{ left: '722px', top: '685px', color: '#9FA2B4' }}>Years</div>
      <div className="button" style={{ left: '705px', top: '258px', color: 'black' }}>Last Name</div>
      <div className="button" style={{ left: '1258px', top: '258px', color: 'black' }}>Add Photos</div>
      <div className="button" style={{ left: '372px', top: '646px', color: 'black' }}>Add Profile Photo</div>
      <div className="button" style={{ left: '705px', top: '644px', color: 'black' }}>Experience</div>
      <div className="button" style={{ left: '372px', top: '353px', color: 'black' }}>Organization Name</div>
      <div className="button" style={{ left: '372px', top: '544px', color: 'black' }}>Change Password</div>
      <div className="button" style={{ left: '372px', top: '970px', color: 'black' }}>Description</div>
      <div className="button" style={{ left: '673px', top: '1294px', color: 'white', background: '#1844BC', borderRadius: '100px' }}>Save</div>
      <div className="button" style={{ left: '1770px', top: '44px', color: 'white', background: '#1844BC', borderRadius: '100px' }}>Logout</div>
    </div>
  );
};

export default AddPhoto;
