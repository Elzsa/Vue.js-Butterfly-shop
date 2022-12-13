// à la ligne 5 il y écrit /*html*/, ce n'est PAS un simple commentaire, cette ligne active l'extensioes6-string-html
// pour vérifier il suffit de mettre en commentaire ce "commentaire" pour voir que ce qui suis change de couleur

app.component('product-display',{
    props:{
        premium:{
            type: Boolean,
            required:true
        }
    },
    template: 
    /*html*/
    `<div class="product-info">
    <h1>{{title}}</h1>
    <br>
    <div class="info">
        <p v-if="inStock">In stock</p>
        <p v-else>Out of stock</p>

        <p>Shipping: {{shipping}}</p>
        <ul>
            <li v-for="detail in details">{{detail}}</li>
        </ul>
        <div 
        v-for="(variant, index) in variants"
        :key="variant.id" 
        @mouseover="updateVariant(index)"
        class="color-circle" 
        :style="{backgroundColor: variant.color}"
        >
        </div>
    </div>
    <div class="image">
        <img v-bind:src="image" alt="butterfly-frame">
    </div>     
    <br><br>
    <button
    class="button"
    :class="{disabledButton : !inStock}" 
    :disabled="!inStock"
    v-on:click="addToCart">
    Add to cart
    </button>
</div>

<br><br><br><br><br>
<review-form @review-submitted="addReview"></review-form>
<br><br>
<review-list :reviews="reviews"></review-list>

`,
data(){
    return{
        product:'Butterfly frame',
        brand:'Butterfly shop ',
        selectedVariant:0,
        details: ['Compton’s Tortoiseshell butterfly','12x16 white frame'],
        variants:[
            {id:2234, color:'#06a49e', image:'./assets/images/Butterfly-Artwork-1.webp', quantity:50},
            {id:2235, color:'#baa033', image:'./assets/images/Butterfly-Artwork-2.webp', quantity:0},
        ],
        reviews:[]
    }
    
},
methods:{
    updateVariant(index){
        this.selectedVariant = index;
    },
    addToCart(){
        this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
    },
    addReview(review){
        this.reviews.push(review)
    }
},
computed:{
    title(){
        return this.brand + '-' +this.product
    },
    image(){
        return this.variants[this.selectedVariant].image
    },
    inStock(){
        return this.variants[this.selectedVariant].quantity
    },
    shipping(){
        if(this.premium){
            return 'Free'
        }
        return 2.99
    }
}
})