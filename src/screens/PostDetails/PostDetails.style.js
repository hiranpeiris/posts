import styled from 'styled-components/native';

export const GrayText = styled.Text`
  font-size: ${({ fontSize }) => (fontSize && fontSize) || 15};
  font-weight: bold;
  color: gray;
`;

export const BoldText = styled.Text`
  font-size: ${({ fontSize }) => (fontSize && fontSize) || 15};
  font-weight: bold;
  color: black;
`;

export const ColorText = styled.Text`
  font-size: ${({ fontSize }) => (fontSize && fontSize) || 15};
  ${({ bold }) => bold && 'font-weight: bold;'};
  color: ${({ color }) => (color && color) || 'black'};
`;

export const VSpacer = styled.View`
  height: ${({ space }) => (space && space) || '5px'};
`;

export const PhotoImage = styled.Image`
  height: 120;
  width: 100%;
  flex: 1;
  margin: 2px;
`;
