import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is Required"),
      size: yup
      .string()
      .oneOf(['small', 'medium', 'large'], "Size is required")
      .required("Choose a size"),
      role: yup
      .string()
      .oneOf(['pepperoni', 'mushroom', 'chicken', 'anchovies'], "Select 2 Toppins")
      .min(2,"Please Select at least 2 options"),
  })
export default formSchema  