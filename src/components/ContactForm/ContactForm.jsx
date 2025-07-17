import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import CustomDatePicker from "../CustomDatePicker/CustomDatePicker";
import clsx from "clsx";
import { validationBookingSchema } from "../../validation/validation";
import css from "./ContactForm.module.css";
import toast from "react-hot-toast";

const ContactForm = () => {
  const dateId = useId();

  const handleSubmit = (values, { resetForm }) => {
    try {
      toast.success(`Camper booked on ${values.date}!`);
      resetForm();
    } catch {
      toast.error("Something went wrong, try again later...");
    }
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Book your campervan now</h2>
      <p className={css.subtitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={{
          name: "",
          email: "",
          date: "",
          comment: "",
        }}
        validationSchema={validationBookingSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          {/* Name field */}
          <div className={css.inputWrapper}>
            <Field
              type="text"
              name="name"
              placeholder="Name *"
              autoComplete="name"
              className={css.input}
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>

          {/* Email field */}
          <div className={css.inputWrapper}>
            <Field
              type="email"
              name="email"
              placeholder="Email *"
              autoComplete="email"
              className={css.input}
            />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          {/* Date Picker */}
          <div className={css.inputWrapper}>
            <Field name="date">
              {({ field, form }) => (
                <CustomDatePicker
                  className={clsx(css.input)}
                  field={field}
                  form={form}
                  id={dateId}
                />
              )}
            </Field>
            <ErrorMessage name="date" component="div" className={css.error} />
          </div>

          {/* Comment field */}
          <div className={css.inputWrapper}>
            <Field
              as="textarea"
              name="comment"
              placeholder="Comment"
              className={`${css.textarea} ${css.input}`}
              rows="5"
              cols="20"
            />
            <ErrorMessage
              name="comment"
              component="div"
              className={css.error}
            />
          </div>

          {/* Submit Button */}
          {/* <div className={css.buttonWrapper}> */}
          <button type="submit" className={css.button}>
            Send
          </button>
          {/* </div> */}
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
