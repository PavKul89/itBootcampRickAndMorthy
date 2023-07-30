import { useState } from 'react';
import Modal from './Modal';
import './Post.css';

function Post(props) {
  const [modalActive, setModalActive] = useState(false);
  const { name, image } = props;

  return (
    <div className="post">
      <Modal
        className="modal-description"
        cartData={props}
        active={modalActive}
        setActive={setModalActive}
      />
      <img onClick={() => setModalActive(true)} src={image} alt={name} />
      <h2>{name}</h2>
    </div>
  );
}

export default Post;
