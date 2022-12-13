app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
    <h3>Leave a review</h3>
    <br>
    <input id="name" v-model="name" placeholder="First Name, Family Name">
    <br>
    <label for="review"><p>Review:</p></label>
    <textarea id="review" v-model="review"></textarea>
    <br>
    <label for="rating"><p>Rating</p></label>
    <select id="rating" v-model.number="rating">
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    </select>
    <br><br>
    <input class="button" type="submit" value="Submit">
    </form>`,
    data(){
        return{
            name:'',
            review:'',
            rating:null
        }
    },
    methods:{
        onSubmit(){
            let productReview ={
                name:this.name,
                review:this.review,
                rating:this.rating
            }
            this.$emit('review-submitted', productReview)

            this.name=''
            this.review=''
            this.rating=null
        }
    }
})