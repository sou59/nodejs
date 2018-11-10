<template>
    <div>
        <div class="container">

<!-- TABLE USERS -->              
            <v-data-table
                :headers="headers"
                :items="cars"
                hide-actions
                class="elevation-1"
            >
                <template slot="items" slot-scope="props">
                    <td >{{ props.item.id }}</td>
                    <td >{{ props.item.iduser  }}</td>
                    <td >{{ props.item.brand  }}</td>
                    <td >{{ props.item.model  }}</td>
                </template>
            </v-data-table>
        
<!-- FORMULAIRE -->        
            <v-form ref="form" v-model="car.valid">
                <v-text-field
                    v-model="car.id"
                    :rules="car.idRules"
                    label="Id"
                    required
                >
                </v-text-field>

                <v-text-field
                    v-model="car.iduser"
                    :rules="car.iduserRules"
                    label="iduser"
                    required
                >
                </v-text-field>

                <v-text-field
                    v-model="car.brand"
                    :rules="car.brandRules"
                    label="brand"
                    required
                >
                </v-text-field>

                <v-text-field
                    v-model="car.model"
                    :rules="car.modelRules"
                    label="model"
                    required
                >
                </v-text-field>

                <v-btn color="primary"
                :disabled="!car.valid"
                    @click="add"
                >
                    submit
                </v-btn>
            </v-form>

        </div>

<!-- Importation du template Dialogs -->
        <div>
            <dialogs />
        </div>

<!-- FOOTER -->
        <div>
           <v-footer
            height="auto"
            color="primary lighten-1"
            >

            <v-layout
            justify-center
            row
            wrap
            >

                <v-btn
                    v-for="link in links"
                    :key="link"
                    color="white"
                    flat
                    round
                >
                    {{ link }}
                </v-btn>

                <v-flex
                    primary
                    lighten-2
                    py-3
                    text-xs-center
                    white--text
                    xs12
                >
                    &copy;2018 — <strong>Vuetify</strong>
                </v-flex>
            </v-layout>
        </v-footer>
    </div>
</div>
</template>


<script>
import Dialogs from '../components/Dialogs'
import 'whatwg-fetch'

    export default {
        components: {
            Dialogs
        },

        data: () => {
                           
            return {
                links: [
                    'Home',
                    'About Us',
                    'Team',
                    'Services',
                    'Blog',
                    'Contact Us'
                ],
 
                headers: [
                    {text: "Id", value: "id"},
                    {text: "IdUser", value: "iduser"},
                    {text: "Brand", value: "brand"},
                    {text: "Model", value: "model"},
                ],
                cars: [
                        {
                            "id": 1,
                            "iduser": 1,
                            "brand": "Lionne",
                            "model": "30"
                        },
                        {
                            "id": 2,
                            "iduser": 2,
                            "brand": "Mercedes",
                            "model": "3000"
                        },
                        {
                            "id": 3,
                            "iduser": 4,
                            "brand": "lexus",
                            "model": "3000"
                        }
                    ],
                    car: {
                        valid: false,
                        id: '',
                        idRules: [
                            v => !!v || 'Id is required',
                            v => v > 0 || 'Id must be grater than 0 characters'
                        ],
                        iduser: '',
                        iduserRules: [
                            v => !!v || 'Name is required',
                            v => v > 0 || 'Name must be less than 30 characters'
                        ],
                        brand: '',
                        brandRules: [
                        v => !!v || 'Surname is required',
                            v => v.length <= 30 || 'Suurname must be less than 30 characters'
                        ],
                        model: '',
                        modelRules: [
                            v => !!v || 'Age is required',
                            v => v.length <= 30 || 'Suurname must be less than 30 characters'
                        ]
                    }
            }
        },

        mounted () {
            fetch('localhost:3000/cars')
                .then((response) =>{
                return response.json()
                }).then((json) => {
                    this.cars = json;
                }).catch((ex) =>{
                    console.log('parsing failed', ex)
                })
        },

        methods: {
            add () {
                if (this.$refs.form.validate()) {
                    this.cars.push({
                        id: this.car.id,
                        iduser: this.car.iduser,
                        brand: this.car.brand,
                        model: this.car.model,
                    });
                }
            }
        }    
    }
    

</script>

<style>
    .container {
        width: 80%;
    }

    .footer {
        width: 100%;
    }
</style>

