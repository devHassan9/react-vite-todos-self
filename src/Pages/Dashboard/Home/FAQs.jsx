import { Typography } from "antd"
import { Col, Row } from "antd"

const {Title} = Typography

const FAQs = () => {
  return (
    <div className="py-5">
        <div className="container">
            <Row>
                <Col span={24}>
                <Title level={1} className="text-center">FAQs - Home</Title>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default FAQs