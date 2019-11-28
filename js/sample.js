(function(){
    'use strict';

    var rm = new Vue({
        el: '#sample',
        data: {
            value: 0,
            attachRed: false,
            color: 'green',
            demo_color: 'gray',
            width: 100,
            progressBar: {
                width: '0px',
                backgroundColor: 'yellowgreen'
            }
       },
        computed:{
            divClasses: function(){
                return {
                    red: this.attachRed,
                    blue: !this.attachRed
                };
            },
            myStyle: function(){
                return {
                    backgroundColor: this.demo_color,
                    width: this.width + 'px'
                };
            }
        },
        methods:{
            startProgress: function() {
                var vm = this;
                var width = 0;
                setInterval(function(){
                    width = width + 10;
                    vm.progressBar.width = width + 'px';
                }, 1000);
            }
        }

        /*
        computed:{
            result: function(){
                return this.value == 20 ? 'done' : 'not yet';
            }
        },
        watch:{
            result: function(){
                var vm = this;
                setTimeout(function(){
                    vm.value = 0;
                }, 5000)
            }
        }
        */
    });
})();