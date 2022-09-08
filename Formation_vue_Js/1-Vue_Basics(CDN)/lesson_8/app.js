const app = Vue.createApp({
    data() {
        return{
            url: 'http//:www.thenetninja.co.uk',
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: './assets/1.jpg'},
                {title: 'the way of kings', author: 'brandon snderson', img: './assets/2.jpg'},
                {title: 'the final empire', author: 'brandon snderson', img: './assets/3.jpg'}
            ]
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app')