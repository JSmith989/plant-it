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

const createGarden = (data) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/gardens.json`, data).then((response) => {
    const update = { firebaseKey: response.data.name };
    axios
      .patch(`${baseUrl}/gardens/${response.data.name}.json`, update).then((patchResponse) => {
        resolve(patchResponse);
      })
      .catch((error) => reject(error));
  });
});

const updateGarden = (dataObj) => axios.patch(`${baseUrl}/gardens/${dataObj.firebaseKey}.json`, dataObj);

const deleteGarden = (gardenId) => axios.delete(`${baseUrl}/gardens/${gardenId}.json`);

const getGardensPlants = (gardenId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gardens-plants.json?orderBy="gardenId"&equalTo="${gardenId}"`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const deleteGardenTable = (gardenId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/gardens-plants.json?orderBy="gardenId"&equalTo="${gardenId}"`).then((response) => {
    Object.keys(response.data).forEach((firebaseKey) => {
      axios.delete(`${baseUrl}/gardens-plants/${firebaseKey}.json`);
    });
  }).then(resolve).catch((error) => reject(error));
});

export {
  getAllGardens,
  getGardenById,
  createGarden,
  getUsersGardens,
  updateGarden,
  deleteGarden,
  getGardensPlants,
  deleteGardenTable,
};
