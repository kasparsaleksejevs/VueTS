import Vue from 'vue';
import { Component } from 'vue-property-decorator';

interface Product {
    id: number;
    name: string;
    price: number;
}

@Component
export default class FetchDataComponent extends Vue {
    products: Product[] = [];

    mounted() {
        fetch('api/products')
            .then(response => response.json() as Promise<Product[]>)
            .then(data => {
                this.products = data;
            });
    }
}
