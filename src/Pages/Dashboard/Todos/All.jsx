import { DeleteOutlined, EditOutlined, MoreOutlined } from '@ant-design/icons'
import { Dropdown } from 'antd'
import { Button, Table, Typography } from 'antd'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const { Title, Text } = Typography

const All = () => {

    const [todos, setTodos] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        const todos = JSON.parse(localStorage.getItem("todos"))
        if (todos) { setTodos(todos.map(todo => ({ ...todo, key: todo.id }))) }

    }, [])

    const handleDelete = todo => {

        const filteredTodos = todos.filter(item => item.id !== todo.id)

        setTodos(filteredTodos)

        localStorage.setItem("todos", JSON.stringify(filteredTodos))

        window.toastify("Todo deleted", "success")
    }

    const columns = [
        { title: 'Title', dataIndex: 'title' },
        { title: 'Due Date', dataIndex: 'dueDate' },
        { title: 'Description', dataIndex: 'description' },
        { title: 'Priority', dataIndex: 'priority', render: text => <Text className='text-capitalize' >{text}</Text> },
        { title: 'Dare Created', dataIndex: 'createdAt', render: text => <Text className='text-capitalize' >{dayjs(text).format("ddd DD-MMM-YY, hh:mm:ss A")}</Text> },

        {
            title: 'Action',
            render: (_, record) => (
                <Dropdown menu={{
                    items: [
                        { label: "Edit", key: "edit", icon: <EditOutlined />, onClick: () => { navigate(`/dashboard/todos/edit/${record.id}`) } },
                        { label: "Delete", key: "delete", icon: <DeleteOutlined />, onClick: () => { handleDelete(record) } }
                    ]
                }} trigger={['click']} >
                    <Button className='border-0' icon={<MoreOutlined />}></Button>
                </Dropdown>
            ),
        },
    ];

    return (
        <main className='py-5'>
            <div className="container">
                <div className="d-flex mb-4 align-items-center justify-content-between">
                    <Title level={2} className="mb-0">Add Todo</Title>
                    <Button type="primary" onClick={() => { navigate("/dashboard/todos/add") }} >Add Todo</Button>
                </div>
                <Table columns={columns} dataSource={todos} />
            </div>
        </main>
    )
}

export default All