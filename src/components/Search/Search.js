import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@material-ui/core";

const initialValues = {
  word: "",
};

const validationSchema = Yup.object({
  word: Yup.string()
    .required("Required")
    .max(20, "Please keep your search under 20 characters."),
});

function Search({ searchStatus, search }) {
  const onSubmit = (values, { resetForm }) => {
    console.log("Form data", values);
    search(values);
    resetForm({ values: "" });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "20%",
            margin: "0 auto 10px",
          }}
        >
          <Field
            style={{ textAlign: "center", height: "30px", fontSize: "15px" }}
            type="text"
            placeholder="Search word"
            id="word"
            name="word"
          />
          <ErrorMessage name="word" />
        </div>
        {searchStatus}
        <Button variant="contained" color="primary" size="large" type="submit">
          Search
        </Button>
      </Form>
    </Formik>
  );
}

export default Search;
