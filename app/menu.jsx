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

  const separatorComp = <view style={styles.separator} />;
  const headerComp = <Text>Top of List</Text>;
  const footerComp = <Text>End of list</Text>;
  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={separatorComp}
        ListHeaderComponent={headerComp}
        ListFooterComponent={footerComp}
        ListFooterComponentStyle={styles.footerComp}
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
    return StyleSheet.create({
      contentContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal: 12,
        backgroundColor: theme.background,
      },
      separator: {
        height: 1,
        backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
        width: "50%",
        maxWidth: 300,
        marginHorizontal: "auto",
        marginBottom: 10,
      },
      footerComp: {
        marginHorizontal: "auto",
      },
    });
  }
}
