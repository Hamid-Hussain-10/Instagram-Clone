import { FlatList } from "react-native";
import { Surface } from "react-native-paper";
import StoryItem from "./StoryItem";
import { STORIES } from "../data/stories";

export default function Stories() {
  return (
    <Surface
      mode="flat"
      style={{
        paddingVertical: 12,
        paddingHorizontal: 6,
        backgroundColor: "#fff",
      }}
    >
      <FlatList
        horizontal
        data={STORIES}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <StoryItem
            name={item.name}
            image={item.image}
            isMyStory={index === 0}
          />
        )}
      />
    </Surface>
  );
}
