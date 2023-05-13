import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddCardPopup(props) {
  return (
    <PopupWithForm
      name="cardPopup"
      title="Новое место"
      textButton="Создать"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        id="mestoTitle-input"
        name="mestoTitle"
        type="text"
        placeholder="Название"
        className="popup__input-text popup__input-text_type_title"
        minLength={2}
        maxLength={30}
        required=""
      />
      <span className="popup__input-error mestoTitle-input-error">
        Вы пропустили это поле.
      </span>
      <input
        id="mestoLink-input"
        name="mestoLink"
        type="url"
        placeholder="Ссылка на картинку"
        className="popup__input-text popup__input-text_type_link"
        required=""
      />
      <span className="popup__input-error mestoLink-input-error">
        Вы пропустили это поле.
      </span>
    </PopupWithForm>
  )
}
