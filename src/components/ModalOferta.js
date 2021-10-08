import React from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

const ModalOferta = ({ modal, toggle, oferta, handleAcceptOferta }) => { 
    const handleCancelOferta = () => {
        return window.confirm(`Estás seguro que querés cancelar la oferta de $${oferta}?`)
            ? toggle()
            : false;
    }

    return (
        <Modal modalClassName="bg-dark" backdrop="static" isOpen={modal} toggle={toggle}>
            <ModalHeader>
                <h2>¿Aceptás la oferta?</h2>
            </ModalHeader>

            <ModalBody>
                <h3>Aceptá ahora y te vas con ${ oferta }!</h3>
            </ModalBody>

            <ModalFooter>
                <Button onClick={handleAcceptOferta} color="warning">Aceptar oferta</Button>
                <Button onClick={handleCancelOferta} color="danger">Cancelar oferta</Button>
            </ModalFooter>
        </Modal>
    )
}

export default ModalOferta