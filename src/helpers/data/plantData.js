import axios from 'axios';

const baseUrl = 'https://plant-it-capstone-default-rtdb.firebaseio.com/';

const getAllPlants = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/plants.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

export default { getAllPlants };
