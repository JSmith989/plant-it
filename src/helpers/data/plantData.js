import axios from 'axios';

const baseUrl = 'https://plant-it-capstone-default-rtdb.firebaseio.com/';

const getAllPlants = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/plants.json`).then((response) => {
    resolve(Object.values(response.data));
  }).catch((error) => reject(error));
});

const getPlantById = (plantId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/plants/${plantId}.json`).then((response) => {
    resolve(response.data);
  }).catch((error) => reject(error));
});

const createPlant = (data) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/plants.json`, data).then((response) => {
    const update = { firebaseKey: response.data.name };
    axios
      .patch(`${baseUrl}/plants/${response.data.name}.json`, update).then(resolve);
  }).catch((error) => reject(error));
});

const createGardenPlant = (data) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/gardens-plants.json`, data)
    .then((response) => {
      axios.patch(`${baseUrl}/gardens-plants/${response.data.name}.json`, { firebaseKey: response.data.name })
        .then(() => {
          resolve(response);
        });
    }).catch((error) => reject(error));
});

const deletePlantsGardens = (firebaseKey) => axios.delete(`${baseUrl}/gardens-plants/${firebaseKey}.json`);

const deleteKeyValue = (plantId) => axios.get(`${baseUrl}/gardens-plants.json?orderBy="plantId"&equalTo="${plantId}"`)
  .then((response) => {
    const arrayValue = Object.values(response);
    arrayValue.forEach((array) => {
      const keyArray = Object.keys(array);
      keyArray.forEach((id) => {
        deletePlantsGardens(id);
      });
    });
  });

const updatePlant = (dataObject) => axios.patch(`${baseUrl}/plants/${dataObject.firebaseKey}.json`, dataObject);

export {
  getAllPlants,
  getPlantById,
  createPlant,
  createGardenPlant,
  deleteKeyValue,
  updatePlant,
};
