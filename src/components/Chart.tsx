import React, { FC, useState } from "react";
import { useCallbackOne, useMemoOne } from "use-memo-one";

// Styling
import styles from "../styles/components/Chart";

// Components
import { PointerLabel } from "../components";
import { LineChart } from "react-native-gifted-charts";
import { observer } from "mobx-react";

// Constants
import { Colors } from "../constants/theme";
import { SCREEN_WIDTH } from "../constants/dimensions";

type Props = {
  data: any;
};

const Chart: FC<Props> = ({ data }) => {
  const [offset, setOffset] = useState<number>(0);

  const onPointerScroll = useCallbackOne(data => {
    if (data.pointerX < SCREEN_WIDTH / 2) setOffset(50);
    else setOffset(-50);
  }, []);

  const pointerConfig = useMemoOne(
    () => ({
      pointerStripColor: Colors.WHITE,
      pointerStripWidth: 1,
      pointerColor: Colors.WHITE,
      radius: 4,
      pointerLabelWidth: 100,
      pointerLabelHeight: 90,
      shiftPointerLabelX: offset,
      activatePointersOnLongPress: false,
      autoAdjustPointerLabelPosition: false,
      pointerLabelComponent: items => <PointerLabel items={items} />,
    }),
    [offset],
  );

  return (
    <LineChart
      data={data}
      curved
      width={SCREEN_WIDTH - 32}
      hideDataPoints
      initialSpacing={0}
      spacing={(SCREEN_WIDTH - 64) / data.length}
      color={Colors.GREEN}
      thickness={3}
      startFillColor='rgba(20,105,81,0.3)'
      endFillColor='rgba(20,85,81,0.01)'
      rulesColor='gray'
      startOpacity={0.9}
      endOpacity={0.2}
      noOfSections={3}
      stepValue={33}
      maxValue={99}
      yAxisColor={Colors.DARK_GRAY}
      yAxisThickness={0}
      yAxisLabelSuffix={" °C"}
      yAxisTextStyle={styles.yAxisTextStyle}
      yAxisLabelContainerStyle={styles.yAxisLabelContainerStyle}
      yAxisSide={"right"}
      yAxisLabelWidth={-1}
      xAxisColor='gray'
      xAxisType={"dot"}
      getPointerProps={onPointerScroll}
      pointerConfig={pointerConfig}
    />
  );
};

export default observer(Chart);
