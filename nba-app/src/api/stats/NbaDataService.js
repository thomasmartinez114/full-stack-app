import axios from 'axios';

class NbaDataService {
    retrieveAllNba(username) {
        return axios.get(`http://localhost:8080/${username}/players/nbas`);
    }
}

export default new NbaDataService();