import axios from 'axios';

const route = 'http://localhost:8080/api/drawing';

const fetchDrawing = (drawingId) => {
   return axios.get(`${route}/${drawingId}`)
      .then((response) => response.data);
}

const fetchDrawings = (userId) => {
   return axios.get(route, { params: { userId } })
      .then((response) => response.data);
}

const createDrawing = (drawing) => {
   return axios.post(route, drawing)
      .then((response) => response.data);
}

export { fetchDrawing, fetchDrawings, createDrawing };