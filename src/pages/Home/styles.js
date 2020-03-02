import { darken } from 'polished';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  background: #191920;
`;

export const ProductList = styled(FlatList)`
  margin-top: 20px;
  flex: 1;
`;

export const Product = styled.View`
  margin-right: 15px;
  padding: 10px;
  max-width: 220px;
  max-height: 372px;
  background: #fff;
  border-radius: 4px;
  align-items: center;
`;
export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;
export const TitleText = styled.Text.attrs({
  numberOfLines: 2,
})`
  align-self: flex-start;
  margin-top: 10px;
  line-height: 21px;
`;

export const PriceText = styled.Text`
  margin-top: 5px;
  align-self: flex-start;
  font-size: 21px;
  font-weight: bold;
`;

export const AddButton = styled(RectButton)`
  margin-top: 14px;
  flex: 1;
  flex-direction: row;
  background: #7159c1;
  border-radius: 4px;
  align-items: center;
`;

export const AddText = styled.Text.attrs({
  numberOfLines: 1,
})`
  padding: 12px;
  flex: 1;
  font-size: 14px;
  color: #fff;
  text-align: center;
  text-transform: uppercase;
`;

export const IconView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px;
  background: ${darken(0.03, '#7159c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const IconText = styled.Text`
  margin-left: 5px;
  color: #fff;
  font-size: 14px;
`;
