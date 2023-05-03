import React from 'react';
import "../Style/ModalStyle.css";

const Modal = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const handleToggle = () => {
        setOpenModal(!openModal);
    }

    return (
        <>
            <button className='toggleBtn' onClick={handleToggle}>Open</button>
            {
                openModal ? <div className='modalContainer'>
                    <div className='overlay'>
                        <div className='modal'>
                            <button className='closeBtn' onClick={handleToggle}>Close</button>
                        </div>
                    </div>
                </div> : <>
                </>
            }
        </>
    )
}

export default Modal