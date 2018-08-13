import axios from "axios";

export const fetchHackerNewsData = async () => {
  try {
    const { data } = await axios.get("https://hn.algolia.com/api/v1/search");
    return data;
  } catch (error) {
    console.error(error);
  }
};
