import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name="avatarPopup"
      title="Обновить аватар"
      textButton="Сохранить"
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        id="avatarLink-input"
        name="avatarLink"
        type="url"
        placeholder="Ссылка на фото"
        className="popup__input-text popup__input-text_type_link"
        required=""
      />
      <span className="popup__input-error avatarLink-input-error">
        Вы пропустили это поле.
      </span>
    </PopupWithForm>
  )
}
