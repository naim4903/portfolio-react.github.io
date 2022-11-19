import React, { useState, useEffect } from 'react'
import { Card, Row, Button, Form, Col } from 'react-bootstrap';
import { toast } from "react-toastify";
import { v4 } from 'uuid';

const Todo = () => {
    const [itemData, setItemData] = useState([]);
    const [item, setItem] = useState("");
    const [itemId, setItemId] = useState("");
    const [mode, setMode] = useState("Add");

    useEffect(() => {
        if (localStorage.getItem("todo")) {
            setItemData(JSON.parse(localStorage.getItem("todo")))
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item) {
            let data = [...itemData, { id: v4(), item: item }];
            setItemData(data);
            localStorage.setItem("todo", JSON.stringify(data))
            toast.success("todo added !")
            setItem("");
        } else {
            toast.error("please enter todo !")
            setItem("");
        }
    };

    const handleDelete = (id) => {
        let data = itemData.filter((itm) => {
            return itm.id !== id;
        });
        setItemData(data);
        localStorage.setItem("todo", JSON.stringify(data));
        toast.success("todo deleted !")
    };

    const handleUpdate = () => {
        itemData.forEach((itm) => {
            if (itm.id === itemId) {
                itm.item = item;
            }
        });
        localStorage.setItem("todo", JSON.stringify(itemData));
        setItemData([...itemData]);
        setTimeout(() => {
            setItem("");
            setMode("Add");
            toast.success("todo updated !")
        }, 100);
    }

    const editClick = (id) => {
        let data = itemData.filter((itm) => {
            return itm.id === id;
        });
        setItem(data[0].item);
        setItemId(data[0].id);
        setMode("Edit");
    };

    const cancelClick = () => {
        setMode("Add");
        setItem("");
    };

    return (
        <div className="counter">
            <h1 className='text-white fs-1'>Todo List</h1>
            <h6 className='text-success'>You have {itemData.length} Todos</h6>
            <Card className='w-50 mb-2 border-0' id='todo-card'>
                <Card.Body className='p-0 w-100'>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col xs={12} md={9} className="p-0 mb-2">
                                <Form.Group>
                                    <Form.Control
                                        type='text'
                                        placeholder='Add a todo'
                                        value={item}
                                        onChange={(e) => setItem(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={3} className="p-0">
                                {
                                    mode === "Add" ?
                                        <Button variant="success" type='submit' className="w-100">Add</Button>
                                        :
                                        <>
                                            <Button variant="success" onClick={handleUpdate} className="w-50">Update</Button>
                                            <Button variant="danger" onClick={cancelClick} className="w-50">Cancel</Button>
                                        </>
                                }
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
            {
                itemData.length > 0 && itemData.map((itm, i) => (
                    <Card key={i} className="mb-2 w-25" id='todo-item'>
                        <Card.Body className='p-2'>
                            {i + 1}. {itm.item}
                            <i className="bi float-end bi-trash3-fill"
                                style={{ cursor: "pointer" }}
                                title="Delete"
                                onClick={() => handleDelete(itm.id)}
                            ></i>
                            <i className="bi float-end me-2 bi-pencil-fill"
                                style={{ cursor: "pointer" }}
                                title="Edit"
                                onClick={() => editClick(itm.id)}
                            ></i>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default Todo;