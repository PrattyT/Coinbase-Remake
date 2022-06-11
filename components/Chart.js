import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
} from "@rainbow-me/animated-charts";

export const { width: SIZE } = Dimensions.get("window");

const Chart = ({
  currentPrice,
  logoUrl,
  name,
  symbol,
  priceChangePercentage7d,
  sparkLine,
}) => {
  console.log("Opening Bottom Sheet");
  const priceChangeColor = priceChangePercentage7d > 0 ? "#34C759" : "#FF3B30";
  return (
    <ChartPathProvider
      data={{ points: sparkLine, smoothingStrategy: "bezier" }}
    >
      <View style={styles.chartWrapper}>
        {/* Titles */}
        <View style={styles.titleWrapper}>
          <View style={styles.upperTitles}>
            <View style={styles.upperLeftTitle}>
              <Image source={{ uri: logoUrl }} style={styles.image} />
              <Text style={styles.subtitle}>
                {name} ({symbol.toUpperCase()})
              </Text>
            </View>
            <Text style={styles.subtitle}>7d</Text>
          </View>

          <View style={styles.lowerTitles}>
            <Text style={styles.boldTitle}>
              ${currentPrice.toLocaleString("en-US", { currency: "USD" })}
            </Text>
            <Text style={[styles.title, { color: priceChangeColor }]}>
              {priceChangePercentage7d.toFixed(2)}%
            </Text>
          </View>
        </View>

        {/* Chart */}
        <ChartPath height={SIZE / 2} stroke="black" width={SIZE} />
        <ChartDot style={{ backgroundColor: "blue" }} />
      </View>
    </ChartPathProvider>
  );
};

const styles = StyleSheet.create({
  chartWrapper: {
    margin: 16,
  },
  titleWrapper: {},
  upperTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  upperLeftTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 4,
  },
  subtitle: {
    fontSize: 14,
    color: "#A9ABB1",
  },
  lowerTitles: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
  },
  boldTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Chart;
