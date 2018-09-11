<!-- src/components/Hello.vue -->
<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Название отеля</th>
                    <th>Категория отеля</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{hotel.name}}</td>
                    <td>{{hotel.cat}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import axios from 'axios';



const config = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Content-Type': 'application/json',
    }
}

@Component
export default class HotelList extends Vue{
    @Prop(Object) hotel!: object;
    mounted(){
        this.getHotelList();
    }
    getHotelList(){



        axios
            .get('http://hotels-admin.pegast.su/api/v1/hotels',{headers: {
                'Access-Control-Allow-Origin': '*'
            }})
            .then((res:Object) => console.log(res));
    }
};
</script>

<style>

</style>
