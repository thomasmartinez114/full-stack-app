import axios from 'axios';
import { API_URL } from '../../Constants'

class NbaDataService {

    // GET all NBA Stats
    retrieveAllNba() {
        return axios.get(`${API_URL}/nba/stats`);
    }

    // GET specified stat
    retrieveNba(id) {
        return axios.get(`${API_URL}/nba/stats/${id}`);
    }

    // DELETE NBA stat
    deleteNba(id) {
        return axios.delete(`${API_URL}/nba/stats/${id}`);
    }

    // UPDATE NBA stat
    updateNba(id, nba) {
        return axios.put(`${API_URL}/nba/stats/${id}`, nba);
    }

    // CREATE NBA stat
    createNba(nba) {
        return axios.post(`${API_URL}/nba/stats/`, nba);
    }
}

export default new NbaDataService();