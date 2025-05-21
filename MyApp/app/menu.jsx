import {
  Appearance,
  StyleSheet,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
  View,
  Text,
  Image,
} from "react-native";

import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/menuImages";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();

  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;

  const styles = createStyles(theme, colorScheme);

  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View>
              <Text>{item.title}</Text>
              <Text>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]} />
          </View>
        )}
      />
    </Container>
  );

  function createStyles(theme, colorScheme) {
    return StyleSheet.create({});
  }
}
