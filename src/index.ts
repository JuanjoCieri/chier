/**
 * chier - A simple HTTP client library for making GET, POST, PUT and DELETE requests.
 *
 * @typedef {Object} chier
 * @property {Function} get - Method for making GET requests.
 * @property {Function} post - Method for making POST requests.
 * @property {Function} put - Method for making PUT requests.
 * @property {Function} delete - Method for making DELETE requests.
 *
 */

import axios from "axios";
import NodeCache from "node-cache";

axios.defaults.withCredentials = true;

const cache = new NodeCache({ stdTTL: 60 });

/**
 * chier.get - Method for making GET requests to an API endpoint.
 *
 * @async
 * @function
 * @param {string} rute - The URL of the API endpoint.
 * @returns {Promise} Returns a Promise object that resolves with the response data from the API endpoint.
 */

/**
 * chier.post - Method for making POST requests to an API endpoint.
 *
 * @async
 * @function
 * @param {string} rute - The URL of the API endpoint.
 * @param {Object} data - The data to be sent to the API endpoint.
 * @returns {Promise} Returns a Promise object that resolves with the response data from the API endpoint.
 */

/**
 * chier.put - Method for making PUT requests to an API endpoint.
 *
 * @async
 * @function
 * @param {string} rute - The URL of the API endpoint.
 * @param {Object} data - The data to be sent to the API endpoint.
 * @returns {Promise} Returns a Promise object that resolves with the response data from the API endpoint.
 */

/**
 * chier.delete - Method for making DELETE requests to an API endpoint.
 *
 * @async
 * @function
 * @param {string} rute - The URL of the API endpoint.
 * @returns {Promise} Returns a Promise object that resolves with the response data from the API endpoint.
 */

export const chier = {
  get: async (rute: string) => {
    const cacheKey = rute;                        // Saving the rute in cacheKey to assign a value to it
    const cachedData: any = cache.get(cacheKey);  //Requesting to the cache for the data.
    if (cachedData !== undefined) {
      return cachedData;                          //If there is data stored in the cache we will return the data and will not make a new request to HTTP.
    } else { 
      const response = await axios.get(rute);
      const responseData = response.data;         //Otherwise, we'll make a new HTTP request and cache the data.
      cache.set(cacheKey, responseData);
      return responseData;
    }
  },
  post: async (rute: string, data: any) => {
    try {
      const response = await axios.post(rute, data);
      const responseData = response.data;               
      return responseData;
    } catch (error) {
      throw new Error('Error making the request: ' + error);
    }
  },
  put: async (rute: string, data: any) => {
    try {
      const response = await axios.put(rute, data);
      const responseData = response.data;
      return responseData;
    } catch (error) {
      throw new Error('Error making the request: ' + error);
    }
  },
  delete: async (rute: string) => {
    try {
      const response = await axios.delete(rute);
      const responseData = response.data;
      return responseData;
    } catch (error) {
      throw new Error('Error making the request: ' + error);
    }
  },
};
