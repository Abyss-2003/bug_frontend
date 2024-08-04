import React, { useState } from 'react';
import './DisplayComp.css';
import Modal from './Modal';

const items = [
  { id: 1, name: 'Item 1', description: 'This is item 1' },
  { id: 2, name: 'Item 2', description: 'This is item 2' },
  { id: 3, name: 'Item 3', description: 'This is item 3' },
];



const DisplayComp = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => setModalOpen(true);
    const closeModal = ()=> setModalOpen(false);
  return (
    <>
    {
        isModalOpen &&  <Modal isOpen={isModalOpen} isClose={setModalOpen}>{props.page}</Modal>
    }
    <div className='display_container'>
        <div className="head-container">
        <span className='heading'>{props.heading}</span>
        <span className='create-button' onClick={openModal}>Create {props.heading}</span>
        </div>
      <div className='list'>
        <ul>
          {items.map(item => (
            <li className="list-element" key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default DisplayComp;
