import Api from './Api';

const url = "/productcarts";

const getAll = () => {
    return Api.get(`${url}`);
};

const getByCartId = () => {
    return Api.get(`${url}/cartId/3`);
};

const deleteProduct = (cartId, productId) => {
    const parameters = {
        cartId,
        productId
    }
    return Api.delete(`${url}`, { params: parameters });
}

const ProductCartApi = { getAll, getByCartId, deleteProduct }
export default ProductCartApi;