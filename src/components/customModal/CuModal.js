import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Modal, Form } from 'react-bootstrap'


export default function CuModal({ innerBtn, modalMode, productslist, chosenProduct, onReceive }) {
    const [isShow, setIsShow] = useState(false);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [count, setCount] = useState("");
    const [imgSrc, setImgSrc] = useState("");

    // initial amounts when edit mode
    const initialAmounts = () => {
        setIsShow(true);
        if (modalMode === "edit" && chosenProduct) {
            setName(chosenProduct.name);
            setPrice(chosenProduct.price);
            setCount(chosenProduct.count);
            setImgSrc(chosenProduct.imgSrc);
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (modalMode === "add" && name && price && count && imgSrc) {
            const product = { name, price: Number(price), imgSrc, count: Number(count) };

            // send new product to parrent
            if (onReceive) onReceive(product);
        }
        if (modalMode === "edit" && chosenProduct && name && price && count && imgSrc) {
            const product = { id: chosenProduct.id, name, price: Number(price), imgSrc, count: Number(count) };

            // send new product to parrent
            if (onReceive) onReceive(product);
        }

        // close modal and clear form
        setIsShow(false);
        setName(""); setPrice(""); setCount(""); setImgSrc("");
    };

    return (
        <>
            <a
                onClick={initialAmounts}
                style={{ cursor: "pointer" }}>{innerBtn}</a>

            <Modal show={isShow} onHide={() => setIsShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalMode === "add" ? "Add Product" : "Edit Product"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={submitHandler}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={name} onChange={e => setName(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" value={price} onChange={e => setPrice(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Count</Form.Label>
                            <Form.Control type="number" value={count} onChange={e => setCount(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Image URL</Form.Label>
                            <Form.Control value={imgSrc} onChange={e => setImgSrc(e.target.value)} />
                        </Form.Group>
                        <Button type="submit" className="mt-3">{modalMode === "add" ? "Add" : "Save"}</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

