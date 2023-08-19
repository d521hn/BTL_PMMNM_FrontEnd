import Api from './Api';

const url = "/productorders";

const create = (productId, orderId, quantity, price) => {

    const body = {
        productId,
        orderId,
        quantity,
        price
    }

    return Api.post(url, body);
};

const getByOrderId = (id) => {
    return Api.get(`${url}/order/${id}`);
};

const ProductOrderApi = { getByOrderId, create }
export default ProductOrderApi;