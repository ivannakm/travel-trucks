import * as Yup from "yup";

export const validationBookingSchema = Yup.object().shape({
  name: Yup.string().min(2).max(50).required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date: Yup.date().required("Date is required"),
  comment: Yup.string().max(500, "Too long"),
});
