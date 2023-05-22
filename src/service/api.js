import { apis } from "service";

const COMMON_URL = `https://nodejs-api-phi.vercel.app/`;

const API_URLS = { GET_EDGE_FUNCTIONS: `${COMMON_URL}edge-functions` };

export const getEdgeFunctions = (payload) =>
  apis.get(API_URLS.GET_EDGE_FUNCTIONS, payload);
