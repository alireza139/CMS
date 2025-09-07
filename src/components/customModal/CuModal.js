import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Modal, Form } from 'react-bootstrap'


export default function CuModal({ modalMode }) {
    const [productslist, setProductslist] = useState([
        {
            id: 1,
            name: "product-1",
            price: 152,
            imgSrc: "/coats/coat1.jpg",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
        {
            id: 2,
            name: "product-2",
            price: 555,
            imgSrc: "/coats/coat2.jpg",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
        {
            id: 3,
            name: "product-3",
            price: 140,
            imgSrc: "/coats/coat3.jpg",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
        {
            id: 4,
            name: "product-4",
            price: 495,
            imgSrc: "/coats/coat4.webp",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
        {
            id: 5,
            name: "product-5",
            price: 120,
            imgSrc: "/coats/coat5.jpg",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
        {
            id: 6,
            name: "product-6",
            price: 184,
            imgSrc: "/coats/coat6.webp",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
        {
            id: 7,
            name: "product-7",
            price: 271,
            imgSrc: "/coats/coat1.jpg",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
        {
            id: 8,
            name: "product-8",
            price: 350,
            imgSrc: "/coats/coat2.jpg",
            count: 20,
            saleInfo: [
                { month: "May", sale: 2000 },
                { month: "Jun", sale: 5000 },
                { month: "Oct", sale: 1000 }
            ]
        },
    ])
    const [isShow, setIsShow] = useState(false)
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [count, setCount] = useState("")
    const [imgSrc, setImgSrc] = useState("")

    const submitHandler = (event) => {
        event.preventDefault()
        if (modalMode === "add" && name && price && count && imgSrc) {
            const newProduct = { id: productslist.length + 1, name, price: Number(price), imgSrc, count: Number(count) }

            // Add new product to productslist
            setProductslist([...productslist, newProduct])

            // Close modal and reset form
            setIsShow(false)
            setName('')
            setPrice('')
            setCount('')
            setImgSrc('')
        }
    }

    useEffect(() => {
        console.log(productslist);

    }, [productslist])

    return (
        <div className='mt-3 ms-3'>
            <Modal
                size="lg"
                centered
                show={isShow}
                onHide={() => setIsShow(false)}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Do you want to add a new product to the list?
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form className='w-50 m-auto mt-3' onSubmit={submitHandler}>
                        <Form.Group className="mb-3">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type='text'
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="Enter product name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Count:</Form.Label>
                            <Form.Control
                                type="number"
                                onChange={(e) => setCount(e.target.value)}
                                value={count}
                                placeholder="Enter product count" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price:</Form.Label>
                            <Form.Control
                                type='number'
                                onChange={(e) => setPrice(e.target.value)}
                                value={price}
                                placeholder="Enter product price" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Source image:</Form.Label>
                            <Form.Control
                                type="text"
                                onChange={(e) => setImgSrc(e.target.value)}
                                value={imgSrc}
                                placeholder="Enter product source image" />
                        </Form.Group>

                        <Button type='submit' className='mt-3' variant='primary'>Add product</Button>
                    </Form>
                </Modal.Body>
            </Modal>

            {
                modalMode === "add" ?
                    <Button
                        variant="primary"
                        onClick={() => setIsShow(true)}
                    >
                        Add a new product
                    </Button> : console.log("edit")

            }
        </div>
    )
}
