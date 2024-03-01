// productStore.js
import { defineStore } from 'pinia';

export const productStore = defineStore('product', {
  state: () => {
    return {
        // Random Data - 
        products: [
          { 
            "name": "Montes Scelerisque",
            "stars": "4.9",
            "reviews": "807",
            "sale": "65",
            "price": "332",
          },
          { 
            "name": "Montes Scelerisque",
            "stars": "4.9",
            "reviews": "807",
            "sale": "65",
            "price": "332",
          },
          { 
            "name": "Montes Scelerisque",
            "stars": "4.9",
            "reviews": "807",
            "sale": "65",
            "price": "332",
          },
          { 
            "name": "Montes Scelerisque",
            "stars": "4.9",
            "reviews": "807",
            "sale": "65",
            "price": "332",
          },
          { 
            "name": "Montes Scelerisque",
            "stars": "4.9",
            "reviews": "807",
            "sale": "65",
            "price": "332",
          }
        ],
    }
},
});
