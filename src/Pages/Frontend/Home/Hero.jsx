import { Typography } from "antd"
import { Col, Row } from "antd"
import { useAuth } from "../../../Context/Auth"

const {Title} = Typography

const Hero = () => {
  const {user} = useAuth()
  return (
    <div className="py-5">
        <div className="container">
            <Row>
                <Col span={24}>
                <Title level={1} className="text-center">Hero - Home</Title>
                <Title level={2} className="text-center">UID: {user.uid} </Title>
                <Title level={2} className="text-center">Name: {user.name} </Title>
                <Title level={2} className="text-center">Email: {user.email} </Title>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Hero