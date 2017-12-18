var app = new Vue({
    
    el: '#app',
    data: function () {
        return {
            show: true,
            users: []
        }
    },
    computed: {
        count: function () {
            return 'Пользователей в списке' + ' ' + this.users.length;
        }
    },
    methods: {
        FIO: function (user) {
            return user.name.first + ' ' + user.name.last
        }
    },
    created() {
        axios.get('http://localhost:3000/users')
        .then(response => {
            this.users = response.data;
        });
    }
});
