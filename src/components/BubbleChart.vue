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
      theme: { type: String, default: 'dark'},
      data: { type: Array, default: ()=>[]},
      links: { type: Array, default: ()=>[]},
      categories: { type: Array, default: ()=>[]},
  },
  data() {
      return {
       //  theme: 'dark',
         option: {
            title: {
                text: ''
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    symbolSize: 50,
                    roam: true,
                    label: { show: true },
                    edgeSymbol: ['circle', 'line'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: { fontSize: 20 },
                    lineStyle: {
                        opacity: 0.8,
                        width: 2,
                        curveness: 0.1,
                    },
                    data: this.data,
                    links: this.links,
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
  height: 600px;
}
</style>