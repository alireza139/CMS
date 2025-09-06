import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Button, Modal, Form } from 'react-bootstrap'

export default function CuModal() {
    const [isShow, setIsShow] = useState(false)
    const [productslist, setProductslist] = useState([])
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [count, setCount] = useState("")
    const [imgSrc, setImgSrc] = useState("")

    const submitHandler = (event) => {
        event.preventDefault()
        if (name && price && count && imgSrc) {
            const newProduct = { name, price: Number(price), count, imgSrc }
            console.log('New Product:', newProduct)

            // Add new product to productslist
            setProductslist([...productslist, newProduct])

            // Close modal and reset form
            setIsShow(false)
            setName('')
            setPrice('')
            setCount('')
            setImgSrc('')
        }
        else {
            alert("لطفا تمام فیلد ها را پر کنید")
        }
    }

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
                                type="text"
                                onChange={(e) => setCount(e.target.value)}
                                value={count}
                                placeholder="Enter product count" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Price:</Form.Label>
                            <Form.Control
                                type='text'
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

            <Button
                variant="primary"
                onClick={() => setIsShow(true)}
            >
                Add a new product
            </Button>

            {/* نمایش محصولات اضافه شده */}
            {/* <div className='mt-3'>
                {productslist.length === 0 && <p>No products added yet.</p>}
                {productslist.map((product, index) => (
                    <div key={index} className='border p-2 mb-2'>
                        <h5>{product.name}</h5>
                        <p>Count: {product.count}</p>
                        <p>Price: {product.price}</p>
                        <p>Image: {product.imgSrc}</p>
                    </div>
                ))}
            </div> */}
        </div>
    )
}
