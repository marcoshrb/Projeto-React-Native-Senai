import { View, Image } from "react-native";

export function Logo(props) {
    return (
        <View style={{ backgroundColor: "yellowgreen", flex: '1', justifyContent: "center", alignItems: "center", maxHeight: "80px" }}>
        <Image
          source={require('../img/imgLogoArvore2.png')}
          style={{
            height: "60px",
            width: "60px",
            margin: "20px"
          }}
        />
      </View>
    );
}