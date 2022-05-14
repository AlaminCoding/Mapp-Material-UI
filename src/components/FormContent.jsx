import styled from "@emotion/styled";
import {
  Box,
  Grid,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { FormHelperText } from "@mui/material";

const FormContent = (props) => {
  const { activeIndex, formik, formData } = props;

  return (
    <ContentWrapper index={activeIndex}>
      <div className="content-box">
        <Typography variant="h5" color="secondary">
          Import Files
        </Typography>
      </div>
      <div className="content-box">
        <Typography variant="h5" color="secondary">
          Data Mapping
        </Typography>
      </div>
      <div className="content-box">
        <Typography variant="h5" color="secondary">
          Entity Mapping
        </Typography>
        <Box component="form" mt={5} onSubmit={formik.handleSubmit}>
          <Grid container spacing={3}>
            <Grid item md={6} sm={12} xs={12}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="select-name">Select Name</InputLabel>
                <Select
                  labelId="select-name"
                  id="select-name"
                  label="Select Name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  IconComponent={() => <KeyboardArrowDownIcon />}
                  name="name"
                  sx={{
                    height: "40px",
                  }}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                >
                  <MenuItem value="Anderson">Anderson</MenuItem>
                  <MenuItem value="Jhon">Jhon</MenuItem>
                  <MenuItem value="Blob">Blob</MenuItem>
                </Select>
                <FormHelperText sx={{ color: "red" }}>
                  {formik.touched.name && formik.errors.name}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="select-grade">Grade</InputLabel>
                <Select
                  labelId="select-grade"
                  id="select-grade"
                  label="Grade"
                  value={formik.values.grade}
                  onChange={formik.handleChange}
                  IconComponent={() => <KeyboardArrowDownIcon />}
                  name="grade"
                  sx={{
                    height: "40px",
                  }}
                  error={formik.touched.grade && Boolean(formik.errors.grade)}
                >
                  <MenuItem value="A">A</MenuItem>
                  <MenuItem value="B">B</MenuItem>
                  <MenuItem value="C">C</MenuItem>
                </Select>
                <FormHelperText sx={{ color: "red" }}>
                  {formik.touched.grade && formik.errors.grade}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="select-email">Email</InputLabel>
                <Select
                  labelId="select-email"
                  id="select-email"
                  label="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  IconComponent={() => <KeyboardArrowDownIcon />}
                  name="email"
                  sx={{
                    height: "40px",
                  }}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                >
                  <MenuItem value="abcd-1@gmail.com">abcd-1@gmail.com</MenuItem>
                  <MenuItem value="abcd-2@gmail.com">abcd-2@gmail.com</MenuItem>
                  <MenuItem value="abcd-3@gmail.com">abcd-3@gmail.com</MenuItem>
                </Select>
                <FormHelperText sx={{ color: "red" }}>
                  {formik.touched.email && formik.errors.email}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <FormControl fullWidth variant="standard">
                <InputLabel id="select-section">Section</InputLabel>
                <Select
                  labelId="select-section"
                  id="select-section"
                  label="Section"
                  value={formik.values.section}
                  onChange={formik.handleChange}
                  IconComponent={() => <KeyboardArrowDownIcon />}
                  name="section"
                  sx={{
                    height: "40px",
                  }}
                  error={
                    formik.touched.section && Boolean(formik.errors.section)
                  }
                >
                  <MenuItem value="Section 1">Section 1</MenuItem>
                  <MenuItem value="Section 2">Section 2</MenuItem>
                  <MenuItem value="Section 3">Section 3</MenuItem>
                </Select>
                <FormHelperText sx={{ color: "red" }}>
                  {formik.touched.section && formik.errors.section}
                </FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </div>
      <div className="content-box">
        <Typography variant="h5" color="secondary" mb={3}>
          Summery
        </Typography>
        <p>Name : {formData.name}</p>
        <p>Grade : {formData.grade}</p>
        <p>Email : {formData.email}</p>
        <p>Section : {formData.section}</p>
      </div>
    </ContentWrapper>
  );
};

export default FormContent;

const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0px 120px 0px 100px;
  @media screen and (max-width: 900px) {
    padding: 0px 50px 0px 50px;
  }
  @media screen and (max-width: 650px) {
    padding: 0px 0px 0px 0px;
  }
  .content-box {
    width: 100%;
    display: none;
    &:nth-of-type(${(props) => props.index}) {
      display: block;
    }
  }
`;
