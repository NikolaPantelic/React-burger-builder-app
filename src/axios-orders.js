import axios from "axios";

const instance = axios.create({
    baseURL: "https://burger-builder-app-2dc92.firebaseio.com/"
});

export default instance;