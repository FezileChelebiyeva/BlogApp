import * as Yup from "yup";

export const blogValidationSchema = Yup.object().shape({
  blogTitle: Yup.string()
    .required("Please write something")
    .min(10, "min 10")
    .max(20, "max 20"),
  blogBody: Yup.string()
    .required("Please write something")
    .min(50, "min 50")
    .max(100, "max 100"),
  blogAuthor: Yup.string().required("Please select a author"),
});
5;
