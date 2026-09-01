import { FlatList } from "react-native";
import { POSTS } from "../data/posts";
import PostItem from "./Feeds";
import Stories from "./Stories";

export default function Posts() {
  return (
    <FlatList
      data={POSTS}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostItem item={item} />}
      ListHeaderComponent={<Stories />}
      showsVerticalScrollIndicator={false}
    />
  );
}
