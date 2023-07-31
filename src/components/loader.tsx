import React from "react"
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"
import { Dimensions } from "react-native"

const { width, height } = Dimensions.get("window")
const cardWidth = width - 20
const cardHeight = height - 200

const Loader = () => (
  <ContentLoader 
    speed={2}
    width={width}
    height={height}
    viewBox={`0 0 ${width} ${height}`}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <Circle cx="31" cy="31" r="15" /> 
    <Rect x="58" y="18" rx="2" ry="2" width="140" height="10" /> 
    <Rect x="58" y="34" rx="2" ry="2" width="140" height="10" /> 
    <Rect x="0" y="60" rx="2" ry="2" width={cardWidth} height={cardHeight} />
  </ContentLoader>
)

export default Loader