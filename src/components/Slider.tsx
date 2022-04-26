import React, { memo } from "react";
import { useCallbackOne } from "use-memo-one";

// Styles

// Components
import { StyleSheet, Text, View } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

// Constants
import { padding, SCREEN_WIDTH } from "constants/spacing";
import colors from "constants/colors";
import { fontMedium } from "constants/fonts";

const rangeSliderKnowSize = 32;
export const rangeSliderWidth = SCREEN_WIDTH - 2 * padding.MEDIUM - rangeSliderKnowSize;
const styles = StyleSheet.create({
  rangeSliderTrack: {
    backgroundColor: "transparent",
  },
  rangeSliderSelected: {
    height: 2,
    backgroundColor: colors.BLACK,
  },
  rangeSliderMarker: {
    backgroundColor: colors.BLACK,
    width: rangeSliderKnowSize,
    height: rangeSliderKnowSize,
    borderRadius: rangeSliderKnowSize / 2,
  },
  rangeSliderBehindTrack: {
    position: "absolute",
    backgroundColor: colors.LIGHT_BROWN,
    width: "100%",
    height: 2,
  },
  rangeSliderWrap: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  rangeSliderRoot: {
    width: "100%",
    justifyContent: "flex-start",
  },
  rangeSliderValue: {
    color: colors.BLACK,
    fontFamily: fontMedium,
    fontSize: 20,
    marginBottom: padding.MEDIUM / 1.5,
  },
});

type Props = {
  type: string;
  values: number[];
  onChange: (type: string, value: []) => {};
  subtitle: string;
};

const Slider: React.FC<Props> = ({ type, values = [], onChange, subtitle }) => {
  const customMarker = useCallbackOne(e => <View style={[styles.rangeSliderMarker]} />, []);

  return (
    <View style={styles.rangeSliderRoot}>
      <Text style={styles.rangeSliderValue}>
        <Text>
          {Math.round(values[0])} {subtitle}
        </Text>
        <Text> - </Text>
        <Text>
          {Math.round(values[1])} {subtitle}
        </Text>
      </Text>
      <View style={styles.rangeSliderWrap}>
        <View style={styles.rangeSliderBehindTrack} />
        <MultiSlider
          values={values}
          onValuesChange={val => onChange && onChange(type, val)}
          sliderLength={rangeSliderWidth}
          min={Math.round(values[0])}
          max={Math.round(values[1])}
          step={1}
          isMarkersSeparated
          selectedStyle={styles.rangeSliderSelected}
          trackStyle={styles.rangeSliderTrack}
          customMarkerLeft={customMarker}
          customMarkerRight={customMarker}
        />
      </View>
    </View>
  );
};

export default memo(Slider);
