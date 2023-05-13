import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup(props) {
  return (
    <PopupWithForm
      name="profilePopup"
      title="Редактировать профиль"
      textButton="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        id="avatarName-input"
        name="avatarName"
        type="text"
        placeholder="Имя"
        className="popup__input-text popup__input-text_type_name"
        minLength={2}
        maxLength={40}
        required=""
      />
      <span className="popup__input-error avatarName-input-error">
        Вы пропустили это поле.
      </span>
      <input
        id="avatarJob-input"
        name="avatarJob"
        type="text"
        placeholder="Работа"
        className="popup__input-text popup__input-text_type_job"
        minLength={2}
        maxLength={200}
        required=""
      />
      <span className="popup__input-error avatarJob-input-error">
        Вы пропустили это поле.
      </span>
    </PopupWithForm>
  )
}
