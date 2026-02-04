import { Typography } from "antd"
import { Col, Row } from "antd"

const {Title} = Typography

const Hero = () => {
  return (
    <div className="py-5">
        <div className="container">
            <Row>
                <Col span={24}>
                <Title level={1} className="text-center">Hero - Contact</Title>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Hero