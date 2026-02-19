import { Button, Form } from "antd"
import { Input } from "antd"
import { Typography } from "antd"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../Context/Auth"
import { DatePicker } from "antd"
import { Select } from "antd"

const { Title } = Typography
const { Item } = Form
const { Option } = Select

const initialState = { title: "", dueDate: "", description: "", priority: "" }

const Add = () => {


    const { dispatch } = useAuth()

    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const navigate = useNavigate()


    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleLogin = () => {

        let { title, dueDate, description, priority } = state

        title = title.trim()

        if (title.length < 3) { return window.toastify("Please enter full title", "error") }

        const todo = {uid: user.uid ,id: window.getRandomId(), title, dueDate, description, priority, status: "active", isCompleted: "false" }

        setIsProcessing(true)
        const todos = JSON.parse(localStorage.getItem("todos")) || []

        todos.unshift(todo)

        setTimeout(() => {
            localStorage.setItem("user", JSON.stringify(user))
            dispatch({ isAuth: true, user })
            navigate("/dashboard")
            setIsProcessing(false)
            window.toastify("Login successful", "success")
        }, 500);

    }

    return (
        <main className='auth flex-center'>
            <div className="container">
                <div className="card p-3 p-4 mx-auto">
                    <Title level={1} className="text-center">Add Todo</Title>
                    <Form layout="vertical">
                        <Item label='Title' required>
                            <Input type='text' size="large" placeholder="Enter title" name="title" onChange={handleChange} />
                        </Item>
                        <Item label='Due Date'>
                            <DatePicker placeholder="Enter due date" name="dueDate" className="w-100" onChange={handleChange} />
                        </Item>
                        <Item label='Description'>
                            <Input.TextArea placeholder="Enter description" name="description" onChange={handleChange} style={{ height: 100, resize: "none" }} />
                        </Item>
                        <Item label='Priority'>
                            <Select size="large" placeholder="Select Priority" >
                                <Option value="low" >Low</Option>
                                <Option value="medium" >Medium</Option>
                                <Option value="high" >High</Option>
                            </Select>
                        </Item>
                        <Button type="primary" size="large" block htmlType="submit" loading={isProcessing} onClick={handleLogin} >Add Todo</Button>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default Add