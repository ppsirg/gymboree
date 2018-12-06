Vue.component('ecard', {
  delimiters: ['[[', ']]'],
  props: [
    'txt', 'bg', 'sets', 'img'
  ],
  template:`
  <div class="pricing-table pricing-table-free" >
      <div class="pricing-table-header" v-bind:class="bg" >
          <h2>[[txt]]</h2>
          <span class="pricing-table-price">
              <img v-bind:src="img"> <span>[[sets]]</span>
          </span>
      </div>
  </div>`
})

Vue.component('dpicker', {
  delimiters: ['[[', ']]'],
  data: function () {
    return {
      opt: this.options.split(' ')
    }
  },
  props: [
    'options'
  ],
  template:`
  <div>
  <select>
   <option v-for="item in opt" v-bind:value="item">[[item]]</option>
  </select>
  </div> `
})

Vue.component('ppanel', {
  delimiters: ['[[', ']]'],
  data: function () {
    return {
      routine: {
          {'tag': 'lunes-viernes', 'data':[],}
          {'tag': 'martes-jueves', 'data':[],}
          {'tag': 'miercoles-sabado', 'data':[],}
      }
    }
  },
  template:`
  <div>
  <div class="pure-menu pure-menu-horizontal">
      <div class="pure-menu-heading">gymboree</div>
      <dpicker options="lunes-viernes martes-jueves miercoles-sabado"></dpicker>
  </div>
  <div class="l-content" >
      <div class="pricing-tables pure-g" v-for="tags in steps">
          <div class="pure-u-1 pure-u-md-1-3" v-for="item in tags">
              <ecard
              v-bind:txt='item.txt'
              v-bind:bg='item.bg'
              v-bind:img='item.img'
              v-bind:sets='item.sets'
              ></ecard>
          </div>
      </div>
  </div>
  </div>
  `
})

// lunes-viernes
//
// ext_cuadriceps
// press pierna
// curl femoral
//
// tijeras
// abductor
// aductor
//
//
// martes-jueves
//
// exprimidas
// elevacion alternada
// elevacion piernas
//
// remo barra
// oblicuas
//
//
// miercoles-sabado
