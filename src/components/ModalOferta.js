import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const ModalOferta = ({ modal, toggle, oferta }) => {
    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Aceptás la oferta?</ModalHeader>

            <ModalBody>
                ${ oferta }
            </ModalBody>

            <ModalFooter>
                <Button color="primary" onClick={toggle}>Aceptar</Button>
                <Button color="secondary" onClick={toggle}>Cancelar</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalOferta
