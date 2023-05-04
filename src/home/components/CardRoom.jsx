import { Link } from 'react-router-dom';

export const CardRoom = (props) => {

  const {
    room_id,
    room,
    description,
    photo
  } = props;


  return (

      <article id={room_id}>
        <div>
          <img src={photo} alt={room} title={room} />
        </div>
        <h3> {room} </h3>
        <p> {description} </p>
        <Link to={`/room/${room_id}`}> Ver sala </Link>
      </article>

  );

};