import { FixedSizeList } from "react-window";
import { FixedWindowType } from "../../type/commonType";

const FixedWindow = ({height, width, itemCount, itemSize, renderedItem}: FixedWindowType) => {
  return (
    <FixedSizeList
      height={height}
      width={width}
      itemCount={itemCount.length}
      itemSize={itemSize}
    >
      {renderedItem}
    </FixedSizeList>
  )
}

export default FixedWindow;