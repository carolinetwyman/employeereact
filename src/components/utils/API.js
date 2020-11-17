import axios from "axios";

export default {
  search: function() {
    return axios.get("http://randomuser.me/api/?results=200&nat=us");
  }
};
    