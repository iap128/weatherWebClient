import { Button, Modal } from 'antd';
import { FC, useState } from 'react';
import WeatherGraph from './WeatherGraph';
import { DownOutlined } from '@ant-design/icons';
import { GraphProps } from '../constants/Interfaces';

interface OwnProps {
  title: string;
}

type Props = OwnProps & GraphProps;

const GraphModal: FC<Props> = ({ title, ...props }) => {
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
        title={title}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key='back' onClick={handleCancel}>
            Close
          </Button>,
        ]}
      >
        <WeatherGraph {...props} />
      </Modal>
    </div>
  );
};

export default GraphModal;
