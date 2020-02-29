import styled from 'styled-components/native';
import logo from '../../assets/imgs/logo.svg';

export const Container = styled.View`
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  background: #191920;
`;

export const Logo = styled(logo).attrs({
  height: 24,
  width: 185,
})``;

export const BasketContainer = styled.TouchableOpacity`
  position: relative;
  flex-direction: row;
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Badge = styled.View`
  position: absolute;
  top: -8px;
  right: -6px;
  min-width: 18px;
  min-height: 18px;
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 8px;
`;

export const BadgeText = styled.Text`
  font-size: 12px;
  color: #fff;
`;
