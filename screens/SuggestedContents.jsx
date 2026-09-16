import React, { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const API_URL = "https://jsonplaceholder.typicode.com/photos?_limit=60";

const SuggestedContents = ({
  endpoint = API_URL,
  selectedCategory = "For You",
}) => {
  const [contents, setContents] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadContents = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error("Unable to load suggested content");
      }

      const data = await response.json();

      setContents(Array.isArray(data) ? data : data.results || data.data || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  useEffect(() => {
    loadContents();
  }, [loadContents]);

  const filteredContents = contents.filter((item) =>
    String(item.title || item.name || "")
      .toLowerCase()
      .includes(query.trim().toLowerCase()),
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={{
          uri: item.url || item.image || item.thumbnailUrl,
        }}
        style={styles.image}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={20} color="#777" />

          <TextInput
            value={query}
            onChangeText={setQuery}
            placeholder="Search With Meta AI"
            placeholderTextColor="#8e8e8e"
            style={styles.searchInput}
            autoCapitalize="none"
          />
        </View>

        <Pressable style={styles.filterButton}>
          <Text style={styles.filterText}>Filter</Text>
        </Pressable>
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#262626" style={styles.loader} />
      ) : error ? (
        <Text style={styles.message}>{error}</Text>
      ) : (
        <FlatList
          data={filteredContents}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(item.id || index)}
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.message}>No results found</Text>
          }
          onRefresh={loadContents}
          refreshing={loading}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 10,
    marginBottom: 20,
    marginTop: 10,
  },

  searchBox: {
    flex: 1,
    height: 42,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    borderRadius: 23,
    backgroundColor: "#f5f5f5",
  },

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 14,
    color: "#000",
  },

  filterButton: {
    height: 42,
    paddingHorizontal: 14,
    borderRadius: 21,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },

  filterText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },

  categoryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    paddingHorizontal: 12,
    marginBottom: 10,
  },

  list: {
    paddingHorizontal: 2,
  },

  row: {
    justifyContent: "space-between",
  },

  card: {
    width: "32.8%",
    marginBottom: 1,
  },

  image: {
    width: "100%",
    aspectRatio: 3/4,
    backgroundColor: "#eee",
  },

  loader: {
    marginTop: 30,
  },
});

export default SuggestedContents;
