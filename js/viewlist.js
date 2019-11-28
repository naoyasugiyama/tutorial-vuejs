(function(){
    'use strict';

    var rm = new Vue({
        el: '#viewapp',
        data: {
            show: false,
            type: 'A',
            ingredients: ['meat','fruit','cookies'],
            persons: [
                {name: 'nsugiyama', age: 34, color: 'red'},
                {name: 'Ana', age: 'unkown', color: 'green'}
            ]
        }
    });

})();