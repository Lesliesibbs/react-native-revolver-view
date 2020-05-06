import React, { useState } from "react"
import { Button, TextInput, View } from "react-native"
import RevolverView from "react-native-revolver-view"

const items = ["All", "Videos", "Images", "News"]
const colors = [
  { rippleColor: "#FFCA27", iconColor: "lightblue", itemColor: "lightblue" },
  { rippleColor: "#ff83c6", iconColor: "#9c005e", itemColor: "#9c005e" },
  { rippleColor: "#beb3ff", iconColor: "#5c569f", itemColor: "#5c569f" },
  { rippleColor: "#ff75a2", iconColor: "#d14274", itemColor: "#d14274" },
]
const App = () => {
  const [config, setConfig] = useState({
    rippleColor: colors[0].rippleColor,
    iconColor: colors[0].iconColor,
    itemColor: colors[0].itemColor,
    activeIndex: 0,
  })

  const setActiveIndex = (newIndex: number) =>
    setConfig((state) => ({
      ...state,
      activeIndex: newIndex,
      rippleColor: colors[newIndex].rippleColor,
      iconColor: colors[newIndex].iconColor,
      itemColor: colors[newIndex].itemColor,
    }))

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFCA27",
      }}>
      <RevolverView
        items={items}
        rippleActiveOpacity={0.5}
        activeIndex={config.activeIndex}
        onChangeIndex={setActiveIndex}
        rippleColor={config.rippleColor}
        itemColor={config.itemColor}
        rotatingComponent={<SemiCircle color={config.iconColor} />}
        containerStyle={{
          width: "50%",
        }}
        itemStyle={{
          letterSpacing: 0.4,
        }}>
        <TextInput
          style={{
            flex: 1,
            marginLeft: 100,
            marginRight: 10,
          }}
        />
      </RevolverView>
      <View style={{ marginTop: 50 }} />
      <Button title="Index 0" onPress={() => setActiveIndex(0)} />
      <View style={{ marginTop: 10 }} />
      <Button title="Index 1" onPress={() => setActiveIndex(1)} />
      <View style={{ marginTop: 10 }} />
      <Button title="Index 2" onPress={() => setActiveIndex(2)} />
      <View style={{ marginTop: 10 }} />
      <Button title="Index 3" onPress={() => setActiveIndex(3)} />
    </View>
  )
}

const SemiCircle = ({ color }: { color: string }) => (
  <View
    style={{
      padding: 10,
    }}>
    <View
      style={{
        top: 0,
        left: 0,
        position: "absolute",
        width: 10,
        height: 10,
        overflow: "hidden",
        bottom: 5,
      }}>
      <View
        style={{
          top: 0,
          left: 0,
          position: "absolute",
          width: 20,
          height: 20,
          borderRadius: 10,
          backgroundColor: color,
        }}
      />
    </View>
  </View>
)

export default App
