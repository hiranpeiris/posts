import styled from 'styled-components/native';

export const Container = styled.View`
  height: 90px;
  padding-top: 10px;
  padding-bottom: 10px;
  flex-direction: row;
  border-bottom-color: #ededed;
  border-bottom-width: 1px;
`;

export const RowImage = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 35px;
  background-color: #e5e5e5;
  border-color: #FFA500;
  border-width: 2px;
  ${({ src }) => src && `src: ${src};`};
`;

export const RowTitleBox = styled.View`
  padding-left: 10px;
  flex-direction: column;
`;

export const RowTitleText = styled.Text`
  font-size: 18;
  font-weight: bold;
  height: 20px;
  color: ${({ color }) => (color && color) || 'black'};
`;

export const RowDescText = styled.Text`
  margin-top: 4px;
  font-size: 14;
  height: 40px;
  color: ${({ color }) => (color && color) || 'black'};
`;
