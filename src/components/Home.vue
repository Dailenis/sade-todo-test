
<template>
  <div >
    <h1>Bubble Trouble </h1>
    <h2>Colors used: {{categories.length}}</h2>
     <div class="container" :key="key">
       
       <div class="panel">
         <select name="test" v-model="test" @change="loadDatasLinks()" class="test-select">
        <option v-for="test in testOptions" :key="test">{{test}}</option>
      </select>
      <hr>
        <div v-for="(item, index) in data" :key="index" class="panel-content">
          <div class="simple"> 
            
            <BubbleSimple 
              :data="item"
              :categories="categories"
            />
        </div>
          <select class="category-color" name="color" id="" :value="item.category" @change="setColor(index, $event.target.value)">
            <option v-for="cat in categories" :key="cat">{{cat.color}}</option>
          </select>
        </div>
       
     </div>
     <div class="graph">
       <BubbleChart 
          :data="data"
          :links="links"
          :categories="categories"
        />
     </div>
     </div>
    
  </div>
</template>

<script >
import BubbleChart from './BubbleChart.vue'
import BubbleSimple from './BubbleSimple.vue'
import jsonInput1 from '../datas/test1/input.json'
import jsonOutput1 from '../datas/test1/output.json'
import jsonInput2 from '../datas/test2/input.json'
import jsonOutput2 from '../datas/test2/output.json'
import jsonInput3 from '../datas/test3/input.json'
import jsonOutput3 from '../datas/test3/output.json'


export default{
  name: 'Home',
  components:{BubbleChart, BubbleSimple},
  created(){
    this.loadDatasLinks()

  },
  data() {
    return {
      data: [],
      links: [],
      categories: [],
      testOptions:[
        'Test1',
        'Test2',
        'Test3',
      ],
      test:'Test1',
      key: this.getPosition()
    }
  },
  methods: {
    loadDatasLinks(){
      this.loadLinks();
      this.loadData();
      this.loadCategories();
      this.key ++
    },
    loadData(){
      const {assignment} = this.test==='Test1' ? jsonOutput1: this.test==='Test2' ? jsonOutput2: jsonOutput3
      this.data = [];
      assignment.forEach( a => {
         this.data.push({
            name: a.node,
            x: this.getPosition(),
            y: this.getPosition(),
            category: a.color 
         })         
      })
    },

    loadLinks(){
      const {pairs} =  this.test==='Test1' ? jsonInput1: this.test==='Test2' ? jsonInput2: jsonInput3
      this.links = []
      pairs.forEach(p => {
        this.links.push(
          {
            source: p.n1,
            target: p.n2
          })
      })
    },

    loadCategories(){
      const categories = new Set(this.data.map(d => d.category))
       this.categories = []
      categories.forEach(c => {
        this.categories.push({ "color": c})
      })
    },

    getPosition(){
      return  Math.floor(Math.random()*1000);
    },

    setColor(index, color){
     
      const related = this.getRelated(this.data[index].name, color);
      const oldColor = this.data[index].category;
      this.data[index].category = parseInt(color);
      related.forEach( (rel) => {
        const indexRel = this.data.findIndex(d => d.name === rel)
       this.setColor(indexRel, oldColor)
      })
       return 
      
       
      // this.key++
    },

    getRelated(name, newColor){
      const related = []
      this.links.forEach(link => {
        if( link.source === name){
          if(this.haveTheSameColor(link.target, newColor)){
            related.push(link.target)
          }
        }
        if( link.target === name ){
          if(this.haveTheSameColor(link.source, newColor)){
            related.push(link.source)
          }
        }
      })
      return related;
    },

    haveTheSameColor(value, color){
      const sameColor = this.data.filter(d => d.name === value && d.category == color )
      return !!sameColor.length
    }

  },
}


</script>


<style scoped>
  a {
    color: #42b983;
  }
  .graph{
    width: 90%;
  }
  .panel{
    width: 10%;
    display: flex;
    flex-direction: column;

    border: 1px solid #8080805e;
  }
  .panel-content{
      display: flex;
      justify-content: space-evenly;
  }
  .container{
    display: flex
  }
  .simple{
    width: 35px
  }
  .category-color{
    width: 45px;
      height: 40px;
      border: outset;
  }
  select{
     border: outset;
  }
  .test-select{
    height: 30px;
  }
</style>
