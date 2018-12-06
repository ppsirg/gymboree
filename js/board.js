Vue.component('ecard', {
  delimiters: ['[[', ']]'],
  data: function () {
    return {
      count: 0
    }
  },
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
