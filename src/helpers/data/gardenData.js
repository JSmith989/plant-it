import axios from 'axios';

const baseUrl = 'https://plant-it-capstone-default-rtdb.firebaseio.com/';

const getAllGardens = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gardens.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const getUsersGardens = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gardens.json?orderBy="userId"&equalTo="${uid}"`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const getGardenById = (gardenId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gardens/${gardenId}.json`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const createGarden = (data) => axios.post(`${baseUrl}/gardens.json`, data).then((response) => {
  const update = { firebaseKey: response.data.name };
  axios
    .patch(`${baseUrl}/gardens/${response.data.name}.json`, update)
    .catch((error) => console.warn(error));
});

const updateGarden = (dataObj) => axios.patch(`${baseUrl}/gardens/${dataObj.firebaseKey}.json`, dataObj);

const deleteGarden = (gardenId) => axios.delete(`${baseUrl}/gardens/${gardenId}.json`);

export {
  getAllGardens,
  getGardenById,
  createGarden,
  getUsersGardens,
  updateGarden,
  deleteGarden,
};
