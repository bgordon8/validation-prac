import styled from "styled-components";

const Button = styled.button`
  font: inherit;
  border: 1px solid cornflowerblue;
  border-radius: 8px;
  background: #4f4f4f;
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;

  &:hover,
  &:active {
    background: #777777;
    border-color: #777777;
  }

  &:focus {
    outline: none;
  }
`;

// const Button = (props) => {
//   return (
//     <button
//       className={classes.button}
//       type={props.type || "button"}
//       onClick={props.onClick}
//     >
//       {props.children}
//     </button>
//   );
// };

export default Button;
