 <template>
  <div>
    <apexchart
      width="400"
      type="line"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const options = ref({
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [2019, 2020, 2022],
  },
});
const series = ref([
  {
    type: "line",
    name: "chart-1",
    data: [30, 40, 45],
  },
]);
</script>