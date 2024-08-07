export const getProducts = (state) => state.products.items;
export const getSelectedProducts = (state) => state.products.selectedProduct;
export const getIsLoadingProducts = (state) => state.products.isLoading;
export const getErrorProducts = (state) => state.products.error;
export const getTotal = (state) => state.products.total;
export const getIsProductCreated = (state) => state.products.isProductCreated;
export const getIsProductUpdated = (state) => state.products.isProductUpdated;
export const getIsLoadingSelectedProduct = (state) => state.products.isLoadingSelectedProduct;
