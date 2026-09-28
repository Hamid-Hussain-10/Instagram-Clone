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

const API_URL = "https://jsonplaceholder.typicode.com/posts";

const SuggestedContents = ({
  endpoint = API_URL,
  selectedCategory = "For You",
}) => {
  const [contents, setContents] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Used for refresh
  const loadContents = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error("Unable to load suggested content");
      }

      const data = await response.json();

      const result = Array.isArray(data)
        ? data
        : data.results || data.data || [];

      setContents(result);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }, [endpoint]);

  // Initial load
  useEffect(() => {
    let cancelled = false;

    const fetchInitialContents = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error("Unable to load suggested content");
        }

        const data = await response.json();

        const result = Array.isArray(data)
          ? data
          : data.results || data.data || [];

        if (!cancelled) {
          setContents(result);
        }
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error
              ? err.message
              : "Something went wrong"
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchInitialContents();

    return () => {
      cancelled = true;
    };
  }, [endpoint]);

  const filteredContents = contents.filter((item) =>
    String(item.title || item.name || "")
      .toLowerCase()
      .includes(query.trim().toLowerCase())
  );

  const renderItem = ({ item }) => {
    const imageUri =

      item.thumbnailUrl;

    return (
      <View style={styles.card}>
        <Image
          source={{ uri: imageUri }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>

      {/* SEARCH */}

      <View style={styles.searchContainer}>

        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={20}
            color="#777"
          />

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
          <Text style={styles.filterText}>
            Filter
          </Text>
        </Pressable>

      </View>

      {/* CONTENT */}

      {loading && contents.length === 0 ? (
        <ActivityIndicator
          size="large"
          color="#262626"
          style={styles.loader}
        />
      ) : error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.message}>
            {error}
          </Text>

          <Pressable
            style={styles.retryButton}
            onPress={loadContents}
          >
            <Text style={styles.retryText}>
              Try Again
            </Text>
          </Pressable>
        </View>
      ) : (
        <FlatList
          data={filteredContents}
          renderItem={renderItem}
          keyExtractor={(item, index) =>
            String(item.id || index)
          }
          numColumns={3}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <Text style={styles.message}>
              No results found
            </Text>
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

    marginTop: 10,
    marginBottom: 20,
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

  list: {
    paddingHorizontal: 2,
  },

  row: {
    justifyContent: "space-between",
  },

  card: {
    width: "32.8%",

    marginBottom: 1,

    overflow: "hidden",

    backgroundColor: "#eee",
  },

  image: {
    width: "100%",

    aspectRatio: 3 / 4,

    backgroundColor: "#eee",
  },

  loader: {
    marginTop: 30,
  },

  errorContainer: {
    alignItems: "center",

    justifyContent: "center",

    paddingTop: 40,
  },

  message: {
    color: "#666",

    textAlign: "center",

    fontSize: 14,
  },

  retryButton: {
    marginTop: 15,

    backgroundColor: "#000",

    paddingHorizontal: 20,
    paddingVertical: 10,

    borderRadius: 20,
  },

  retryText: {
    color: "#fff",

    fontSize: 14,

    fontWeight: "600",
  },
});

export default SuggestedContents;
