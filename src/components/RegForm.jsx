import { Box, Button, Container, Grid, Divider } from "@mui/material";
import { Typography } from "@mui/material";
import FormSteps from "components/FormSteps";
import FormContent from "components/FormContent";
import { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Doc from "../doc.jpg";
const validationSchema = yup.object({
  name: yup.string("Enter your Name").required("Name is required"),
  grade: yup.string("Enter your Grade").required("Grade is required"),
  email: yup.string("Enter your Email").required("Email is required"),
  section: yup.string("Enter your Section").required("Section is required"),
});

const RegForm = () => {
  const [formData, setFormData] = useState({});

  const formik = useFormik({
    initialValues: {
      name: "Anderson",
      grade: "",
      email: "",
      section: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setFormData(values);
      setIndex(index + 1);
    },
  });

  const [index, setIndex] = useState(1);
  const StepUp = () => {
    if (index < 4) {
      setIndex(index + 1);
    }
  };
  const StepDown = () => {
    if (index > 1) {
      setIndex(index - 1);
    }
  };
  const handleSubmit = () => {
    formik.handleSubmit();
  };
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          height: "100vh",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            p: 5,
            backgroundColor: "#ffffff",
            position: "relative",
          }}
        >
          <img
            src={Doc}
            alt="Logo"
            style={{
              position: "absolute",
              top: "40px",
              right: "40px",
              height: "150px",
            }}
          />
          <Typography variant="h5" color="text.secondary">
            Example with Steps UI
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" mt={1}>
            Follow the simple 4 steps to complete your mapping
          </Typography>
          <Box sx={{ width: "100%", display: "flex" }} mt={5}>
            <Grid container spacing={2}>
              <Grid item xl={2} md={3} sm={5} xs={12}>
                <FormSteps activeIndex={index} />
              </Grid>
              <Grid item xl={10} md={9} sm={7} xs={12}>
                <FormContent
                  activeIndex={index}
                  formik={formik}
                  formData={formData}
                />
              </Grid>
            </Grid>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
            mt={3}
          >
            <Button
              variant="text"
              style={{ color: "gray" }}
              onClick={() => StepDown()}
            >
              Prev
            </Button>
            <Divider orientation="vertical" flexItem />
            <Button
              variant="text"
              color="secondary"
              onClick={index === 3 ? () => handleSubmit() : () => StepUp()}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RegForm;
