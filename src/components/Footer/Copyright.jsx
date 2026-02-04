import { Typography } from "antd"
import { Col, Row } from "antd"

const { Paragraph } = Typography

const Copyright = () => {
  const year = new Date().getFullYear()
  return (
   <footer className="bg-primary py-2">
    <div className="container">
      <Row>
        <Col span={24}>
        <Paragraph className="text-center text-white mb-0" >&copy; {year} CoDev. All rights reserved.</Paragraph>
        </Col>
      </Row>
    </div>
   </footer>
  )
}

export default Copyright