import axios from "configs/axios";

const media = {
  upload: (image) => axios.post(`/media`, { image }),

  join: (id) => axios.post("/my-courses", { course_id: id }),
  mine: () => axios.get("/my-courses"),
};

export default media;
