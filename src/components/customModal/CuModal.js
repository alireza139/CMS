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

        // تبدیل مقادیر به عدد
        const numPrice = Number(price);
        const numCount = Number(count);

        // اعتبارسنجی
        if (!name.trim() || !imgSrc.trim() || !count || !price || !imgSrc.trim()) {
            alert("لطفا تمام فیلدها را پر کنید")
            return;
        }

        // اعتبارسنجی اعداد
        if (isNaN(numPrice) || isNaN(numCount) || numPrice < 1 || numCount < 0) {
            alert("قیمت و تعداد باید عددی و مثبت باشند.");
            return;
        }


        // آماده کردن محصول
        const product = {
            name: name.trim(),
            price: numPrice,
            count: numCount,
            imgSrc: imgSrc.trim(),

            // افزودن ایدی در حالت ادیت به آبجکت
            ...(modalMode === "edit" && chosenProduct ? { id: chosenProduct.id } : {}),
        };

        // ارسال محصول به والد
        if (onReceive) onReceive(product);

        // پاک کردن فرم و بستن مودال
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

