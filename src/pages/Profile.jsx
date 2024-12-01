import React, { useState, useCallback } from "react";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProfileSection from "../components/Profile/ProfileSection";
import EditProfileSection from "../components/Profile/EditProfile-edit";

export default function Profile() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleCloseEdit = useCallback(() => {
    setIsEditMode(false);
    window.location.reload();
  }, []);

  return (
    <div>
      <Header />
      <Navbar />
      {isEditMode ? (
        <EditProfileSection isOpen={isEditMode} onClose={handleCloseEdit} />
      ) : (
        <ProfileSection key={refreshKey} onEditClick={handleEditClick} />
      )}
      <Footer />
    </div>
  );
}
