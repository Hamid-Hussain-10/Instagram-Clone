import { FlatList } from "react-native";
import { Surface } from "react-native-paper";
import StoryItem from "../../screens/StoryItem";

const STORIES = [
  {
    id: "1",
    name: "Your Story",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Ali",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: "3",
    name: "Ahmed",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: "4",
    name: "Sohail",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: "5",
    name: "Jafar",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

export default function HomeScreen() {
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
