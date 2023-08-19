import Api from './Api';

const url = "/payment";

const create = (orderId, totalPrice) => {
    const parameters = {
        orderId,
        totalPrice
    }
    return Api.get(`${url}/create`, { params: parameters });
};

const PaymentApi = { create }
export default PaymentApi;