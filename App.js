import { View } from "react-native";
import RootNavigator from "./navigators/RootNavigator"
import HeaderComponent from "./components/HeaderComponent";

export default function App() {
  return (
    <View style={{flex: 1}}>
      <HeaderComponent />
      <RootNavigator />
    </View>
  );
}