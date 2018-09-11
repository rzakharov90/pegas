import Vue from "vue";
import HelloComponent from "./components/Hello.vue";
import HelloDecoratorComponent from "./components/HelloDecorator.vue";
import HotelListComponent from "./components/HotelList.vue";

let v = new Vue({
    el: "#app",
    template: `
    <div>
        <hotel-list-component :hotel="{name: 'eeeee', cat: '5'}"/>
        Name: <input v-model="name" type="text">
        <h1>Hello Component</h1>
        <hello-component :name="name" :initialEnthusiasm="6" />
        <h1>Hello Decorator Component</h1>
        <hello-decorator-component :name="name" :initialEnthusiasm="5" />
        </div>
    `,
    data: { name: "World" },
    components: {
        HelloComponent,
        HelloDecoratorComponent,
        HotelListComponent
    }
});
