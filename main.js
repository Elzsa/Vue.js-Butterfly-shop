// create the app :  we have put Vue.js link (CDN) in HTML
const app = Vue.createApp({//arguments ==>
    data(){
        return{
            cart:[], // le panier reste ici car il est commun, il n'y a pas un panier par produit mais un panier pour tous les produits
            premium:true
        }
        
    },
    methods:{
        updateCart(id){
            this.cart.push(id)
        }
    }
    
   
})