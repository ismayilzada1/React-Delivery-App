export default class AuthServices {
    constructor() {
        this.baseUrl='https://avazdg.tech:7300/api'
    }
    async login(requestBody) {
        try {
            const response = await fetch(`${this.baseUrl}/Account/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });

            return response;
        } catch (error) {
            console.error('Error in Login:', error);
            throw error;
        }
    }

    async register(requestBody) {
        try {
            const response = await fetch(`${this.baseUrl}/Account/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            });
            return response;
        } catch (error) {
            console.error('Error in Register:', error);
            throw error;
        }
    }
}