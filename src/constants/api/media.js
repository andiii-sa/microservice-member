import axios from "configs/axios";

export default {
  upload: (image) => axios.post(`/media`, { image }),

  join: (id) => axios.post("/my-courses", { course_id: id }),
  mine: () => axios.get("/my-courses"),
};
