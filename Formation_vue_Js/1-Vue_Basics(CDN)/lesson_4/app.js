const app = Vue.createApp({
    data() {
        return {
            title: 'The final empire',
            author: 'Brandon Sanderson',
            age: 45
        }
    },
    methods: {
        changeTitle(title) {
            // this.title = 'Words of Radiance'
            this.title = title
        }
    }
})

app.mount('#app')