import axios from 'axios';

class NbaDataService {
    retrieveAllNba() {
        return axios.get(`http://localhost:8080/nba/stats`);
    }

    // DELETE NBA stat
    deleteNba(id) {
        return axios.delete(`http://localhost:8080/nba/stats/${id}`);
    }
}

export default new NbaDataService();