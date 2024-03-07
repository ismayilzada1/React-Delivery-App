export default class BasketServices {
    constructor() {
        this.baseUrl='https://avazdg.tech:7300/api'
    }

    async finishShopping(requestBody, token) {
        try {


            const response = await fetch(`${this.baseUrl}/Details/process-order`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(requestBody),
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Error in finishShopping: ${response.status} - ${errorMessage}`);
            }


            return response;
        } catch (error) {
            console.error('Error in finishShopping:', error);
            throw error;
        }
    }

    async getUserHistory(token) {
        try {

            const response = await fetch(`${this.baseUrl}/Details/get-orders-history`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(`Error in getUserHistory: ${response.status} - ${errorMessage}`);
            }

            return response;
        } catch (error) {
            console.error('Error in getUserHistory:', error);
            throw error;
        }
    }

}