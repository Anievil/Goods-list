import axios from 'axios'

export const getProduct = async () => {
    const { data } = await axios.get('http://smktesting.herokuapp.com/api/products/');
    return data
};

export const getComments = async (id) => {
    const { data } = await axios.get(`http://smktesting.herokuapp.com/api/reviews/${id}`)
    return data
}

export const auth = async (username, password, action) => {
    const { data: { token } } = await axios.post(`http://smktesting.herokuapp.com/api/${action}/`, { username, password });
    return token
}

export const sendReview = async (rate, comment, id, token) => {
    await axios.post(`http://smktesting.herokuapp.com/api/reviews/${id}`, {
        rate: rate,
        text: comment,
    },
        {
            headers: {
                Authorization: `Token ${token}`
            }
        });
}