export const fetchRequest = async (urlPath, options = {}) => {
  try {
    const BASE_URL =
      "http://ec2-35-156-167-238.eu-central-1.compute.amazonaws.com:5500/api/v1";

    const requestOptions = {
      method: options.method || "GET",
      headers: {
        "Content-Type": "application/json",
        userId: "Emir",
      },
    };

    if (options.method !== 'GET ') {
      requestOptions.body = JSON.stringify(options.body);
    }

    const response = await fetch(`${BASE_URL}${urlPath}`, requestOptions);
    const data = await response.json();
    return data.data;
  } catch (error) {
    new Error(error);
  }
};
