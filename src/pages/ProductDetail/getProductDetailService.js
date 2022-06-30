import productDetail from "./productDetail.json";

export const getProductDetailById = (id) => {
    for (let p of productDetail.data) {
        if (p.id === parseInt(id)) return p;
    }

    return -1;
}
