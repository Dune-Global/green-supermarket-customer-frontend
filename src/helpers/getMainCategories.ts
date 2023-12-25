import axios from "axios";

axios.defaults.baseURL =
  "https://greensupermarket-backend.azurewebsites.net/api/v1";

export const getMainCategories = async () => {
  try {
    const response = await axios.get("/main-category/all-categories");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// const [categories, setCategories] = useState({});

// const fetchMainCategories = async () => {
//   try {
//     const res = await getMainCategories();
//     setCategories(res.data);
//     console.log(categories);
//   } catch (error) {
//     console.log(error);
//   }
// };

// useEffect(() => {
//   fetchMainCategories();
// }, []);
