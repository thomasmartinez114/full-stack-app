import axios from 'axios';

class NbaDataService {
    retrieveAllNba() {
        return axios.get(`http://localhost:8080/nba/stats`);
    }
}

export default new NbaDataService();