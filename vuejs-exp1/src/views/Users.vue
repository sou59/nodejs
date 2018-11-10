<template>
  <div>
        <div class="container">
            <v-dialog v-model="dialog" max-width="500px">
                <v-btn slot="activator" color="primary" dark class="mb-2">New Item</v-btn>
                <v-card>
                <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                    <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.id" label="id"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.calorinamees" label="name"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.surname" label="surname"></v-text-field>
                        </v-flex>
                        <v-flex xs12 sm6 md4>
                        <v-text-field v-model="editedItem.age" label="age"></v-text-field>
                        </v-flex>
                    </v-layout>
                    </v-container>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                </v-card-actions>
                </v-card>
            </v-dialog>

        <v-data-table
            :headers="headers"
            :items="users"
            hide-actions
            class="elevation-1"
        >
            <template slot="items" slot-scope="props">
            <td >{{ props.item.id }}</td>
            <td >{{ props.item.name  }}</td>
            <td >{{ props.item.surname  }}</td>
            <td >{{ props.item.age  }}</td>
            <td class="justify-center layout px-0">
                <v-icon
                    small
                    class="mr-2"
                    @click="editItem(props.item)"
                >
                    edit
                </v-icon>
                <v-icon
                    small
                    @click="deleteItem(props.item)"
                >
                    delete
                </v-icon>
            </td>
            </template>
        </v-data-table>
        
        <v-form ref="form" v-model="user.valid">
            <v-text-field
                v-model="user.id"
                :rules="user.nameRules"
                label="Id"
                required
            >
            </v-text-field>
            <v-text-field
                v-model="user.name"
                :rules="user.nameRules"
                label="name"
                required
            ></v-text-field>
            <v-text-field
                v-model="user.surname"
                :rules="user.surnameRules"
                label="surname"
                required
            ></v-text-field>
            <v-text-field
                v-model="user.age"
                :rules="user.ageRules"
                label="age"
                required
            ></v-text-field>
            
            <v-btn color="primary"
            :disabled="!user.valid"
                @click="add"
            >
                ajouterTableau
            </v-btn>
            
            
        </v-form>
       
    </div>
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
           <!-- <v-btn
                v-for="link in links"
                :key="link"
                color="white"
                flat
                round
            >
                {{ link }}
            </v-btn>-->
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
//import 'whatwg-fetch'

import axios from "axios";
// ajouter élément template
export default {
  data: () => ({
      dialog: false,  
    //return {
      
      headers: [
        { text: "Id", value: "id" },
        { text: "Name", value: "name" },
        { text: "Surname", value: "surname" },
        { text: "Age", value: "age" },
        { text: 'Actions', value: 'name', sortable: false }
      ],
      editedIndex: -1,
      editedItem: {
        id: 0,
        name: '',
        surname: '',
        age: 0,
      },
      defaultItem: {
         id: 0,
        name: '',
        surname: '',
        age: 0,
      },
      users: [],
      user: {
        valid: false,
        id: "",
        idRules: [
          v => !!v || "Id is required",
          v => v > 0 || "Id must be grater than 0 characters"
        ],
        name: "",
        nameRules: [
          v => !!v || "Name is required",
          v => v.length <= 30 || "Name must be less than 30 characters"
        ],
        surname: "",
        surnameRules: [
          v => !!v || "Surname is required",
          v => v.length <= 30 || "Suurname must be less than 30 characters"
        ],
        age: "",
        ageRules: [
          v => !!v || "Age is required",
          v => v > 10 || "Id must be grater than 10 characters"
        ]
      },
      

   // };
    
  }),
  computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      }
    },

    watch: {
      dialog (val) {
        val || this.close()
      }
    },

    /* created () {
      this.initialize()
    }, */

  mounted() {
    axios
      .get("http://localhost:3000/users")
      .then(response => {
        console.log(response.data);
        this.users = response.data;
      })
      .catch(err => {
        console.error("Serveur ne répond pas");
      });
  },

  /*  mounted () {
        fetch('http://localhost:3000/users')
            .then((response) =>{
               return response.json()
            }).then((json) => {
                this.users = json;
            }).catch((ex) =>{
                console.log('parsing failed', ex)
            })
        },
*/
  methods: {
    add() {
      if (this.$refs.form.validate()) {
        axios
          .put("http://localhost:3000/user", {
            id: this.user.id,
            name: this.user.name,
            surname: this.user.surname,
            age: this.user.age
          })
          .catch(err => {
            console.error("Serveur crach");
          });
      }
    },
    deleteItem(item) {
      axios
        .delete("http://localhost:3000/user/" + item.id)
        .catch(err => {
          console.error("Serveur crach");
        });
    },

    
            editItem (item) {
                this.editedIndex = this.user.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },

            deleteItem (item) {
                axios.delete("http://localhost:3000/user/" + item.id)
                const index = this.user.indexOf(item)
                confirm('Are you sure you want to delete this item?') && this.user.splice(index, 1)
            },

            close () {
                this.dialog = false
                setTimeout(() => {
                this.editedItem = Object.assign({}, this.defaultItem)
                this.editedIndex = -1
                }, 300)
            },

            save () {
                if (this.editedIndex > -1) {
                Object.assign(this.user[this.editedIndex], this.editedItem)
                } else {
                this.user.push(this.editedItem)
                }
                this.close()
            }
        }
  
};

</script>

<style>
.container {
  width: 80%;
}
</style>
