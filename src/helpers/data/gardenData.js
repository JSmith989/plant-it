import axios from 'axios';

const baseUrl = 'https://plant-it-capstone-default-rtdb.firebaseio.com/';

const getAllGardens = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gardens.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const getGardenById = (gardenId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gardens/${gardenId}.json`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

export { getAllGardens, getGardenById };
