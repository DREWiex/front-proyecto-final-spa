import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const CardRoom = (props) => {

  const {
    room_id,
    room,
    description,
    photo
  } = props;


  return (

    <article id={room_id}>

      <div className='card-room-img'>

        <img src={photo} alt={room} title={room} />

      </div>

      <h3> {room} </h3>

      <p> {description} </p>

      <div>

        <Link to={`/room/${room_id}`}> Ver sala </Link>

      </div>

    </article>

  );

};

CardRoom.propTypes = {
  props: PropTypes.object.isRequired
}