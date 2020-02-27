import styled from 'styled-components/native';

export const ButtonView = styled.View`
  height: 44px;
  justify-content: center;
  align-items: center;
  ${({ width }) => width && `width: ${width}`};
  background-color: ${({ color }) => (color && color) || '#FFA500'};
  border-radius: 10px;
`;

export const ButtonTitle = styled.Text`
  color: white;
  font-size: 14;
  font-weight: bold;
`;
