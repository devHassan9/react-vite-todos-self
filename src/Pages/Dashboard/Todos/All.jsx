import { Button, Table, Space, Typography } from 'antd'
import dayjs from 'dayjs'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const { Title , Text } = Typography

const All = () => {

    const [todos, setTodos] = useState([])

    const navigate = useNavigate()

    useEffect(() => {

        const todos = JSON.parse(localStorage.getItem("todos"))
        if (todos) { setTodos(todos) }

    }, [])

    const columns = [
        {title: 'Title', dataIndex: 'title'},
        {title: 'Due Date', dataIndex: 'dueDate'},
        {title: 'Description', dataIndex: 'description'},
        {title: 'Priority', dataIndex: 'priority', render: text => <Text className='text-capitalize' >{text}</Text> },
        {title: 'Dare Created', dataIndex: 'createdAt', render: text => <Text className='text-capitalize' >{dayjs(text).format("ddd DD-MMM-YY, hh:mm:ss A")}</Text> },
        
        {
            title: 'Action',
            render: (_, record) => (
                <Space>
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>
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