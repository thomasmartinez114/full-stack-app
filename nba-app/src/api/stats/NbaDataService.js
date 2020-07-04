import axios from 'axios';

class NbaDataService {

    // GET all NBA Stats
    retrieveAllNba() {
        return axios.get(`http://localhost:8080/nba/stats`);
    }

    // GET specified stat
    retrieveNba(id) {
        return axios.get(`http://localhost:8080/nba/stats/${id}`);
    }

    // DELETE NBA stat
    deleteNba(id) {
        return axios.delete(`http://localhost:8080/nba/stats/${id}`);
    }

    // UPDATE NBA stat
    updateNba(id, nba) {
        return axios.put(`http://localhost:8080/nba/stats/${id}`, nba);
    }

    // CREATE NBA stat
    createNba(nba) {
        return axios.post(`http://localhost:8080/nba/stats/`, nba);
    }
}

export default new NbaDataService();