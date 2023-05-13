import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import PopupWithConfirmation from "./PopupWithСonfirmation";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import AddCardPopup from "./AddCardPopup";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);

  const [selectedCard, setselectedCard] = React.useState(false);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setselectedCard(null);
  }
  function handleCardClick(card) {
    setselectedCard(card);
  }
  return (
    <div className="page">
      <Header />

      <Main
        onCardClick={handleCardClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick} />

      <Footer />

      <EditAvatarPopup
        onClose={closeAllPopups}
        isOpen={isEditAvatarPopupOpen} />

      <EditProfilePopup
        onClose={closeAllPopups}
        isOpen={isEditProfilePopupOpen} />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups} />

      <PopupWithConfirmation />

      <AddCardPopup
        onClose={closeAllPopups}
        isOpen={isAddPlacePopupOpen} />

    </div>

  );
}

export default App;
