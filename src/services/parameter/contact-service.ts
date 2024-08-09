import api from "../interceptor";

const url = "parameter/contact/";

export const ContactService = {
    saveFormContact: async (
        body: any
    ): Promise<any> => {
        try {
            return new Promise<any>((resolve, reject) => {
                api.post(`${url}`,
                    body)
                    .then(response => {
                        resolve(response.data);
                    }
                    )
                    .catch(error => reject(error))
            });
        } catch (error) {
            console.error(error);
        }
    }
}