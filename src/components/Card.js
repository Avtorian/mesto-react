export default function Card(props){
  function handleClick() {
    props.onCardClick(props.card);
  }

return(
  <li className="elements__item">
          <img
            onClick={handleClick}
            src={props.card !== null ? props.card.link : "#"}
            alt={props.card !== null ? props.card.name : "#"}
            className="elements__item-photo"
          />
          <div className="elements__container">
            <h2 className="elements__item-title">{props.card.name}</h2>
            <div className="elements__like-container">
              <button type="button" className="elements__like-button"></button>
              <p className="elements__like-value">{props.card.likes.length}</p>
            </div>
          </div>
          <button type="button" className="elements__item-delete"></button>
        </li>
)
}
