import { Typography } from "antd"
import { Col, Row } from "antd"

const {Title} = Typography

const NoPage = () => {
  return (
    <div className="py-5">
        <div className="container">
            <Row>
                <Col span={24}>
                <Title level={1} className="text-center">404- No Page Found</Title>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default NoPage