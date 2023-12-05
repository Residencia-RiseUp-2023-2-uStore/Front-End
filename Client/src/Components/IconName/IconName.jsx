import React from "react";
import styled from "styled-components";

const StyledIconName = styled.a`
  display: flex;
  column-gap: 3px;
  align-items: center;
`;
const Icon = styled.img`
  width: 22px;
`;
const Text = styled.p`
  color: white;
  font-size: 1em;
  font-weight: 600;
`;

const IconName = (props) => {
  return (
    <StyledIconName key={props.key} className="divIcon" href={props.link}>
      <Icon
        src={props.linkImg}
        alt={props.altImg}
        className={props.className}
      />
      <Text className="texto">{props.textoIcon}</Text>
    </StyledIconName>
  );
};

export default IconName;
