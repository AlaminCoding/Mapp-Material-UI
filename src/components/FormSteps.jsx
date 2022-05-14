import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

const step = [
  {
    title: "Import Files",
    subtitle: "Browse and upload",
  },
  {
    title: "Data Maping",
    subtitle: "Select and mapp it",
  },
  {
    title: "Entity Mapping",
    subtitle: "Choose the name",
  },
  {
    title: "Summery",
    subtitle: "Review and confirm",
  },
];

const FormSteps = (props) => {
  const index = props.activeIndex;
  return (
    <FormStep index={props.activeIndex} step={props.activeStep}>
      {step.map((element, idx) => {
        return (
          <li key={idx}>
            <Box>
              <Typography variant="h6" color="text.secondary">
                {element.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {element.subtitle}
              </Typography>
            </Box>
            <span className="material-symbols-outlined">check_circle</span>
            <div
              className="number"
              style={{ display: idx + 1 < index ? "none" : "flex" }}
            >
              {idx + 1}
            </div>
            {idx < 3 ? <CircleIcon /> : null}
          </li>
        );
      })}
    </FormStep>
  );
};

export default FormSteps;
const FormStep = styled.ul`
  list-style-type: none;
  padding: 50px 0px;
  position: relative;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    padding: 0;
    margin-bottom: 30px;
  }
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: rgba(0, 0, 0, 0.4);
    top: 0;
    right: 23px;
  }
  li {
    display: flex;
    align-items: center;
    position: relative;
    margin-top: 50px;
    &:nth-of-type(1) {
      margin-top: 0;
    }
    &:nth-of-type(${(props) => props.index}) {
      .number {
        background-color: #9c27b0;
        color: white;
      }
    }

    span {
      font-size: 36px;
      z-index: 2;
      color: green;
      top: 8px;
      right: 6px;
      position: absolute;
    }
    &:after {
      content: "";
      height: 29px;
      width: 30px;
      background-color: #ffffff;
      position: absolute;
      top: 11px;
      right: 9px;
      z-index: 1;
    }
    .css-0 {
      text-align: right;
      width: 145px;
      margin-right: 34px;
    }
    svg {
      position: absolute;
      bottom: -30px;
      right: 17.35px;
      color: gray;
      font-size: 12px;
      z-index: 2;
    }
    .number {
      height: 26px;
      width: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 2px solid #9c27b0;
      position: absolute;
      top: 11px;
      right: 9px;
      z-index: 2;
      background-color: white;
      color: #9c27b0;
    }
  }
`;
