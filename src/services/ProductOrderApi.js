import Api from './Api';

const url = "/productorders";

const getByOrderId = (id) => {
    return Api.get(`${url}/order/${id}`);
};

const ProductOrderApi = { getByOrderId }
export default ProductOrderApi;