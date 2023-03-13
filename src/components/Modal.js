import React from 'react'

function Modal({ closeModal }) {
    return (
        <div className="modalBackground">
            <div className='modalContainer'>
                <div className="closeBtnTop">
                    <button onClick={closeModal} className='closeBtn' id='closeBtn'>X</button>
                </div>
                <div className="modalBodyContainer">
                    <div className="modalTitle">
                        Subscribe to my Magazine Right Here!
                        <button>Subscribe</button>
                    </div>
                    <div className="modalBody">
                        Be the first to see, be the first plan.
                    </div>
                </div>

                <div className="modalFooter">
                    <button className='modalButton' id='closeBtn' onClick={closeModal}>Close</button>
                    <button className='modalButton'>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
