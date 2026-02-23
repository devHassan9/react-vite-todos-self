import { Button, Typography } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

const { Title } = Typography

const All = () => {

    const navigate = useNavigate()

    return (
        <main className='py-5'>
            <div className="container">
                <div className="d-flex mb-4 align-items-center justify-content-between">
                    <Title level={2} className="mb-0">Add Todo</Title>
                    <Button type="primary" onClick={() => { navigate("/dashboard/todo/add") }} >Add Todo</Button>
                </div>
            </div>
        </main>
    )
}

export default All