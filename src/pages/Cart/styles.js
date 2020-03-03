import { FlatList, SafeAreaView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  flex: 1;
  background: #191920;
`;

export const CartTable = styled(SafeAreaView)`
  margin-top: 15px;
  padding: 15px;
  background: #fff;
  border-radius: 4px;
  text-align: center;
`;

export const CartItems = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Item = styled.View`
  align-items: stretch;
`;

export const ItemInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemImage = styled.Image`
  margin-right: 10px;
  height: 80px;
  width: 80px;
`;
export const ItemDetail = styled.View`
  justify-content: flex-start;
  flex: 1;
`;

export const ItemTitle = styled.Text.attrs({
  numberOfLines: 2,
})`
  margin-right: 15px;
`;

export const ItemPrice = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const ItemControl = styled.View`
  margin-top: 10px;
  padding: 0 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
`;

export const ItemAmountControl = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const InputAmount = styled.TextInput`
  margin: 0 5px;
  padding: 0 5px;
  height: 26px;
  width: 51px;
  font-size: 14px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const TotalControl = styled.View`
  margin-top: 30px;
  align-self: stretch;
  align-items: center;
`;

export const TotalLabel = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #999;
  text-transform: uppercase;
`;

export const TotalText = styled.Text`
  margin-top: 5px;
  font-size: 30px;
  font-weight: bold;
`;

export const FinishCartButton = styled(RectButton)`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
  height: 42px;
  background: #7159c1;
  border-radius: 4px;
`;

export const FinishCartText = styled.Text`
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
`;

export const EmptyCartControl = styled.View`
  align-items: center;
`;

export const EmptyCartText = styled.Text`
  margin-top: 30px;
  color: #000;
  font-size: 24px;
  font-weight: bold;
`;
