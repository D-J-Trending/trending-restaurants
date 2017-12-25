import axios from "axios";

export default {
  APIsearch: function(url, params, headers) {
    return axios.get(url, {
      params: params,
      headers: headers
    })
  },

  AllReviews: function () {
    return axios.get("api/restaurants");
  },

  testQuery: function (name) {
    return axios.get("api/restaurants/" + name);
  }
  
}