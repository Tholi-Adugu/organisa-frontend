import styled from "styled-components";

function Button(props: any) {
  const ButtonComponent = styled.button`
    color: ${props.color};
    background: ${props.background};
    width: ${props.width};
    height: ${props.height};
    border: none;
    border-radius: 10px;
    margin: 5px;
    font-size: ${props.fontSize};
    cursor: pointer;
  `;
  return (
    <div>
      <ButtonComponent>I am Button</ButtonComponent>
    </div>
  );
}

export default Button;
