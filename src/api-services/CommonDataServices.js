export default class CommonDataServices {
    _base_url='https://avazdg.tech:7300/api'

    async getResource(url) {
        try {
            const result = await fetch(`${this._base_url}${url}`);
            if (!result.ok) {
                throw new Error(`Error: Status code ${result.status}`);
            }
            return await result.json();
        } catch (error) {
            console.error('Error in getResource:', error);
            throw error;
        }
    }

    async getAllCategories() {
        return await this.getResource(`/Details/get-all-categories`);
    }

    async getAllTypesByCategoryId(categoryId) {
        return await this.getResource(`/Details/get-types-by-category-id?categoryId=${categoryId}`);
    }


    async getProductById(productId) {
        return await this.getResource(`/Details/get-product-by-id?productId=${productId}`);
    }

    async getAllProductsByCategoryId(categoryId) {
        return await this.getResource(`/Details/get-products-by-category-id?categoryId=${categoryId}`);
    }


}