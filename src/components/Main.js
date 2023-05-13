
import React from 'react';
import Card from './Card';
import { api } from '../utils/Api.js'
export default function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([])

  React.useEffect(() => {
    Promise.all([api.getInitialCards(), api.getProfileInfo()])
      .then(([initialCards, userData]) => {
        // ["Первый промис", "Второй промис"]
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        initialCards.reverse();
        setCards(initialCards);
      })
      .catch((err) => console.log(`Ошибка ${err}`))
  }, []);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__container-avatar">
          <img
            src={userAvatar}
            alt="Аватар"
            className="profile__avatar"
          />
          <button onClick={props.onEditAvatar} type="button" className="profile__avatar-edit" />
        </div>
        <div className="profile__info">
          <div className="profile__container">
            <h1 className="profile__avatar-name">{userName}</h1>
            <button onClick={props.onEditProfile} type="button" className="profile__edit-button" />
          </div>
          <p className="profile__avatar-job">{userDescription}</p>
        </div>
        <button onClick={props.onAddPlace} type="button" className="profile__add-button" />
      </section>
      <section className="elements">
        <ul className="elements__items">
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardClick={props.onCardClick}
            />
          ))}
        </ul>
      </section>
    </main>
  )
}
