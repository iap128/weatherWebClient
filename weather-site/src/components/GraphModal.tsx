import { Button, Modal } from 'antd';
import { useState } from 'react';
import WeatherGraph from './WeatherGraph';
import { DownOutlined } from '@ant-design/icons';

const GraphModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Button shape='circle' size='small' onClick={showModal} icon={<DownOutlined />} />
      <Modal
        title='My Modal'
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <WeatherGraph />
      </Modal>
    </div>
  );
};

export default GraphModal;
