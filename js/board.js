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
  methods: {
      choice: function() {
          var selector = document.getElementById('yey');
          this.$emit('picker_update', selector.value);
      }
  },
  template:`
  <div>
  <select id='yey' v-on:change="choice">
   <option v-for="item in opt" v-bind:value="item">[[item]]</option>
  </select>
  </div>`
})

Vue.component('ppanel', {
  delimiters: ['[[', ']]'],
  data: function () {
    return {
      routine: {
          'lunes_viernes': [
              [
                  {txt: 'ext_cuadriceps', sets: '15x4', img: '', bg: 'pink-card'},
                  {txt: 'press pierna', sets: '15x4', img: '', bg: 'pink-card'},
                  {txt: 'curl femoral', sets: '15x4', img: '', bg: 'pink-card'},
              ],
              [
                  {txt: 'tijeras', sets: '15x4', img: '', bg: 'green-card'},
                  {txt: 'abductor', sets: '15x4', img: '', bg: 'green-card'},
                  {txt: 'aductor', sets: '15x4', img: '', bg: 'green-card'},
              ]
          ],
          'miercoles_sabado': [
              [
                  {txt: 'press banco', sets: '15x4', img: '', bg: 'green-card'},
                  {txt: 'peck-deck', sets: '15x4', img: '', bg: 'green-card'},
                  {txt: 'press maquina', sets: '15x4', img: '', bg: 'green-card'},
              ],
              [
                  {txt: 'jalon polea espalda', sets: '15x4', img: '', bg: 'blue-card'},
                  {txt: 'remo sentado', sets: '15x4', img: '', bg: 'blue-card'},
                  {txt: 'remo t', sets: '15x4', img: '', bg: 'blue-card'},
              ],
              [
                  {txt: 'curl barra', sets: '15x4', img: '', bg: 'yellow-card'},
                  {txt: 'martillo', sets: '15x4', img: '', bg: 'yellow-card'},
                  {txt: 'curl barra', sets: '15x4', img: '', bg: 'yellow-card'},
              ],
              [
                  {txt: 'ext polea', sets: '15x4', img: '', bg: 'pink-card'},
                  {txt: 'copa', sets: '15x4', img: '', bg: 'pink-card'},
                  {txt: 'extension- press nuca', sets: '15x4', img: '', bg: 'pink-card'},
                  {txt: 'elevacion lateral', sets: '15x4', img: '', bg: 'pink-card'},
                  {txt: 'elevacion frontal', sets: '15x4', img: '', bg: 'pink-card'},
              ]
      ],
          'martes_jueves': [
              [
                  {txt: 'exprimidas', sets: '15x4', img: '', bg: 'blue-card'},
                  {txt: 'elevacion alternada', sets: '15x4', img: '', bg: 'blue-card'},
                  {txt: 'elevacion piernas', sets: '15x4', img: '', bg: 'blue-card'},
              ],
              [
                  {txt: 'remo barra', sets: '15x4', img: '', bg: 'yellow-card'},
                  {txt: 'oblicuas', sets: '15x4', img: '', bg: 'yellow-card'},
              ]
          ],

      },
      picker_state : 'lunes_viernes',
    }
  },
  computed: {
      picker_input: function() {
          return Object.keys(this.routine).join(' ');
      }
  },
  methods: {
      check_picker: function (picker_value) {
          this.picker_state = picker_value;
      }
  },
  template:`
  <div>
  <div class="pure-menu pure-menu-horizontal">
      <div class="pure-menu-heading">gymboree</div>
      <dpicker v-on:picker_update="check_picker" v-bind:options="picker_input"></dpicker>
  </div>
  <div class="l-content" v-for="(steps, key) in routine" v-show="picker_state == key">
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
