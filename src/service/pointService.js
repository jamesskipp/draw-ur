import axios from 'axios';

const route = 'http://localhost:8080/api/point';

const createPoint = (params) => {
   return axios.post(route, params)
      .then((response) => response.data);
}

const deletePoints = (drawingId) => {
   return axios.delete(route, {
      data: { drawingId }
   }).then((response) => response.data);
}

export { createPoint, deletePoints };