import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "@material-ui/core";

const initialValues = {
  word: "",
};

const validationSchema = Yup.object({
  word: Yup.string().required("Required"),
});

function Search(props) {
  const onSubmit = (values, { resetForm }) => {
    console.log("Form data", values);
    props.search(values);
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
          <label htmlFor="word">Search Word</label>
          <Field
            style={{ textAlign: "center", height: "30px", fontSize: "20px" }}
            type="text"
            // placeholder="Search word"
            id="word"
            name="word"
          />
          <ErrorMessage name="word" />
        </div>

        <Button variant="contained" color="primary" size="large" type="submit">
          Search
        </Button>
      </Form>
    </Formik>
  );
}

export default Search;
