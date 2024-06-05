import styled from 'styled-components';
import { SectionHeading, SectionParagraph } from '~/components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  border: 2px solid #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: border 0.2s;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    border: 2px solid #0096C7;
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: 20%;
  background-color: #f0f0f0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  width: 80%;
`;

export const CardTitle = styled((props) => <SectionHeading {...props} />)`
  margin: 0;
  font-size: 1rem;
  color: black;
  transition: color 0.2s;

  ${CardContainer}:hover & {
    color: #0096C7;
  }
`;

export const CardDescription = styled((props) => <SectionParagraph {...props} />)`
  margin: 0.5rem 0 0;
  font-size: 0.875rem;
`;
