(function(){
    'use strict';

    var rm = new Vue({
        el: '#app',
        data: {
            todos:[
                'task1',
                'task2',
                'task3'
            ],
            title: 'Hello World!',
            input_title: 'null',
            link: 'http://google.com',
            // クロスサイトスクリプティング注意
            finishedLink: '<a href="http://google.com">Google</a>',
            img_path: 'https://jp.vuejs.org/images/logo.png',
            name: 'NSUGIYAMA',
            counter: 0,
            x: 0,
            y: 0
        },
        methods:{
            // input key
            changeTitle: function(){
                this.input_title = event.target.value;
            },
            seyHelloy: function(){
                this.tilte='Hello'
                return this.title;
            },
            SetName: function(){
                return this.name;
            },
            addcount: function(step, event){
                this.counter+=step;
            },
            updateCoordinates: function(event){
                this.x = event.clientX;
                this.y = event.clientY;
            },
            
            alertMe: function(){
                alert('Alert!');
            }

        }
    });
})();