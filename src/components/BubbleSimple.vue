<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { GraphChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent } from "vue";
use([
  CanvasRenderer,
  GraphChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

export default defineComponent({
  name: "BubbleTrouble",
  components: { VChart },
  provide: {
    [THEME_KEY]: 'light', //dark
  },
  props:{
      data: { type: Object, default: ()=>{}},
      categories: { type: Array, default: ()=>[]},
  },
  data() {
      return {
         option: {
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    symbolSize: 30,
                    roam: true,
                    label: { show: true },
                    edgeSymbol: ['circle', 'line'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: { fontSize: 10 },
                   
                    data:[ this.data],
                    categories: this.categories
                },
                
            ]
         } 
      }
  },

});
</script>


<style scoped>
.chart {
  height: 50px;
}
</style>