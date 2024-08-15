import APIClient from 'itraceit-jslib-v2';
const config = {
  hashKey: "e539e8ed062736dc9a66a9a8081e007f1cf1c5d31e5c1487b6a7378d8af72451",
  domainId: "23ad79a0-0a7e-46fd-8758-2e7920d01b28",
};

const apiClient = new APIClient(config);

export default defineEventHandler(async (event) => {
    const authResponse = await apiClient.authenticate();
    return { authResponse };
});
