import { Field, Form, Formik} from "formik"

const initialValues = {
  query: '',
}

export const Searchbar = ({ updateQuery }) => {
  const handleSubmit = (values, { resetForm }) => {
    updateQuery(values);
    resetForm();
  };


  return(

    <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    >
     
        <Form  autoComplete="off">
          <button type="submit" >
            <span>Search</span>
          </button>

          <Field
            name="query"
            type="text"
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </Form>
      
    </Formik>
  )
}

// {/* <header class="searchbar">
//         <form class="form">
//           <button type="submit" class="button">
//             <span class="button-label">Search</span>
//           </button>

//           <input
//             class="input"
//             type="text"
//             autocomplete="off"
//             autofocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header> */}