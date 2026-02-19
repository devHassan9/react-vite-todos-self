import { Typography } from "antd"
import { Space } from "antd"
import { Col, Row } from "antd"
import { Link } from "react-router-dom"

const {Title} = Typography

const Hero = () => {
  return (
    <div className="py-5">
        <div className="container">
            <Row>
                <Col span={24} className="text-center" >
                <Title level={1}>Hero - Home</Title>

                <Space>
                  <Link to="/" className="btn btn-primary">Frontend</Link>
                <Link to="/dashboard/todos" className="btn btn-success">Todos</Link>
                </Space>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Hero