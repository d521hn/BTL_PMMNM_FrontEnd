import Api from './Api';

const url = "/orders";

const create = (shipId, userId, orderStatus, paymentMethod, paymentStatus) => {

    const body = {
        shipId,
        userId,
        orderStatus,
        paymentMethod,
        paymentStatus
    }

    return Api.post(url, body);
};

const getById = (id) => {
    return Api.get(`${url}/${id}`);
};

const getByShipId = (id) => {
    return Api.get(`${url}/ship/${id}`);
};

const OrderApi = { create, getByShipId, getById }
export default OrderApi;