import { Link } from 'react-router-dom'

const All = () => {
    return (
        <main>
            <Link to="/dashboard/todos/add" className='btn btn-primary'>Add New Todo</Link>
        </main>
    )
}

export default All