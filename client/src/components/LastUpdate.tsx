import { ReloadOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { fetchCardData } from '../constants/CardProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const LastUpdate = () => {
  const [lastUpdate, setLastUpdate] = useState('2');

  useEffect(() => {
    const getData = async () => {
      //all entries contain the time added, so we can choose any
      //I'm just picking temperature and reading from the date field
      const data = await fetchCardData('temperature');
      setLastUpdate(data[0]?.date);
    };

    getData();
  }, []);

  let agoString = '';
  let diff = 0;

  if (lastUpdate) {
    const now = new Date();
    const then = new Date(lastUpdate);
    diff = Math.round((now.getTime() - then.getTime()) / 60000);

    if (diff < 60) {
      agoString = ' seconds ago';
    } else {
      agoString = ' minutes ago';
    }
  }

  return (
    <div>
      <Typography.Text>Last update: </Typography.Text>
      <Typography.Text type='secondary'>{diff}</Typography.Text>
      <Typography.Text type='secondary'>{agoString}</Typography.Text>
      {diff > 200 && <FontAwesomeIcon icon={faTriangleExclamation} style={{ color: 'red' }} />}
      <Button
        icon={<ReloadOutlined />}
        style={{ margin: '5px' }}
        onClick={() => window.location.reload()}
      />
    </div>
  );
};

export default LastUpdate;
