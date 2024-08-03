export const apiService = {
  get: async function (url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("Response", json);

          resolve(json);
        })
        .catch((error) => reject(error))
    });
  },
};
