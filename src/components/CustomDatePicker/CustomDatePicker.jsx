import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CustomDatePicker.module.css";

const CustomDatePicker = ({ className, field, form, ...rest }) => {
  const selected = field?.value
    ? new Date(`${field.value}T12:00:00`) // ensure valid ISO for all timezones
    : null;

  const handleChange = (date) => {
    form.setFieldValue(field.name, date.toISOString().split("T")[0]); // sets "yyyy-MM-dd"
  };

  return (
    <DatePicker
      className={className}
      selected={selected}
      onChange={handleChange}
      dateFormat="MM-dd-yyyy"
      placeholderText="Booking date *"
      {...rest}
    />
  );
};

export default CustomDatePicker;
