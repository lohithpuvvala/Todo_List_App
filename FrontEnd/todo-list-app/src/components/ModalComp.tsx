import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ModalComp = ({ show, setShow, id }: { show: boolean; setShow: (value: boolean) => void; id: number }) => {
    const handleDelete = async () => {
        setShow(false);
        try {
            const response = await fetch(`http://localhost:8080/api/todos/${id}`, {
                method: "DELETE"
            })
            console.log("Todo with ID: ", id, " deleted successfully.");
        } catch (error: any) {
            console.error("Error deleting Todo: ", error.message);
        }
    };
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Todo!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this Todo?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
