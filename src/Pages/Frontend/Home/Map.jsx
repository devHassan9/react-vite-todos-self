import { Typography } from "antd"
import { Col, Row } from "antd"

const {Title} = Typography

const Map = () => {
  return (
    <div className="py-5">
        <div className="container">
            <Row>
                <Col span={24}>
                <Title level={1} className="text-center">Map - Home</Title>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export default Map