import axios from 'axios';

class NbaDataService {
    retrieveAllNba() {
        return axios.get(`http://localhost:8080/players/nbas`);
    }
}

export default new NbaDataService();