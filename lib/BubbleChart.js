import {PropTypes} from 'react';
import {
  requireNativeComponent,
  View
} from 'react-native';

import ChartBase from './ChartBase';
import {bubbleData} from './ChartDataConfig';
import {nativeOnly} from "./ChartCallbackNativeOnly";

const iface = {
  name: 'BubbleChart',
  propTypes: {
    ...ChartBase.propTypes,

    data: bubbleData
  }
};

export default requireNativeComponent('RNBubbleChart', iface, nativeOnly);
