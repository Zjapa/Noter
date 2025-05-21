import { InfoBoxStyled } from "./InfoBox.styled";

interface InfoBoxProps {
  label: string;
}

const InfoBox = ({ label }: InfoBoxProps) => {
  return (
    <InfoBoxStyled>
      <h5>{label}</h5>
    </InfoBoxStyled>
  );
};

export default InfoBox;
