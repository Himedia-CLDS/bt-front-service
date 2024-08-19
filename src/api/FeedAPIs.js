const base_url = process.env.REACT_APP_API_BASE_URL;

export const request = async (method, url, data = null) => {
  try {
    const options = {
      method,
      headers: {},
    };

    if (data) {
      if (data instanceof FormData) {
        options.body = data;
      } else {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
      }
    } else {
      options.headers["Content-Type"] = "application/json";
    }

    const response = await fetch(`${base_url}${url}`, options);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return response;
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);
    throw error; 
  }
};
