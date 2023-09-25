import axios from 'axios';

export const fetchCardData = async (dataType: string) => {
  try {
    const res = await axios.get(`http://localhost:4002/${dataType}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
