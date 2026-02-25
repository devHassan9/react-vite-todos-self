import { Button, Form } from "antd"
import { Input } from "antd"
import { Typography } from "antd"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../../../Context/Auth"
import { DatePicker } from "antd"
import { Select } from "antd"

const { Title } = Typography
const { Item } = Form
const { Option } = Select

const initialState = { title: "", dueDate: "", description: "", priority: "" }

const Edit = () => {

    const { user } = useAuth()

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const navigate = useNavigate()


    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = () => {

        let { title, dueDate, description, priority } = state

        title = title.trim()

        if (title.length < 3) { return window.toastify("Please enter a valid title", "error") }

        const todo = { title, dueDate, description, priority }
        todo.uid = user.uid
        todo.id = window.getRandomId()
        todo.status = "active"
        todo.isCompleted = false
        todo.createdAt = new Date().getTime()

        setIsProcessing(true)

        const todos = JSON.parse(localStorage.getItem("todos")) || []

        todos.push(todo)
        localStorage.setItem("todos", JSON.stringify(todos))
        setTimeout(() => {
            setIsProcessing(false)
            window.toastify("TODO Created", "success")
        }, 500);

    }

    return (
        <main className='auth flex-center'>
            <div className="container">
                <div className="card p-3 p-4 mx-auto">
                    <div className="d-flex mb-4 align-items-center justify-content-between">
                        <Title level={2} className="mb-0">Update Todo</Title>
                        <Button type="primary" onClick={() => { navigate("/dashboard/todos") }} >Todos</Button>
                    </div>
                    <Form layout="vertical">
                        <Item label='Title' required>
                            <Input type='text' size="large" placeholder="Enter Title" name="title" onChange={handleChange} />
                        </Item>
                        <Item label='Due Date'>
                            <DatePicker size="large" placeholder="Enter Due Date" className="w-100" onChange={(obj, dueDate) => { setState(s => ({ ...s, dueDate })) }} />
                        </Item>
                        <Item label='Description' >
                            <Input.TextArea placeholder="Enter Description" name="description" onChange={handleChange} style={{ height: 100, resize: "none" }} />
                        </Item>
                        <Item label="Priority" >
                            <Select size="large" placeholder="Select Priority" onChange={(priority) => { setState(s => ({ ...s, priority })) }} >
                                <Option value="low">Low</Option>
                                <Option value="medium">Medium</Option>
                                <Option value="high">High</Option>
                            </Select>
                        </Item>
                        <Button type="primary" size="large" block htmlType="submit" loading={isProcessing} onClick={handleSubmit} >Update TODO</Button>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default Edit