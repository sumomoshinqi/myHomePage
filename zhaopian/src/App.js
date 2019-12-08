import React, {Component} from 'react';
import {Card, Col, Row, Layout} from 'antd';
import './App.css';

const {Meta} = Card;
const {Content} = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Content>
            <div style={{display: 'flex',
              alignItems: 'center',
              justifyContent: 'center', padding: '50px'}}>
              <Row gutter={16}>
                <Col span={8}>
                  <a target="_blank" href="https://www.icloud.com/sharedalbum/#B0wG6XBubGdvsij">
                    <Card
                      hoverable
                      style={{width: 300}}
                      cover={<img src="coverImg/USdaily.jpg"/>}
                    >
                      <Meta title="美国日常" description="持续更新"/>
                    </Card>
                  </a>
                </Col>
                <Col span={8}>
                  <a target="_blank" href="https://www.icloud.com/sharedalbum/#B0w5nhQSTGQAqpV">
                    <Card
                      hoverable
                      style={{width: 300}}
                      cover={<img src="coverImg/Fr2018.JPG"/>}
                    >
                      <Meta title="2019年8月 法国" description="🇫🇷 🏖️ 巴黎 尼斯 摩纳哥"/>
                    </Card>
                  </a>
                </Col>
                <Col span={8}>
                  <a target="_blank" href="https://www.icloud.com/sharedalbum/#B0wGY8gBYjQjGq">
                    <Card
                      hoverable
                      style={{width: 300}}
                      cover={<img src="coverImg/Wed.JPG"/>}
                    >
                      <Meta title="婚纱照" description="2018.02.15(农历新年) 领证"/>
                    </Card>
                  </a>
                </Col>
              </Row>
            </div>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;