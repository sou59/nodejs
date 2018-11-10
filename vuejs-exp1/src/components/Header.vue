<template>
  <div>
    <v-toolbar
      color="cyan"
      dark
      tabs>
      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-tabs
        slot="extension"
        v-model="tab"
        color="cyan"
        grow>
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab
          v-for="item in items"
          :key="item.text"
          :to="item.path"
          >
          {{ item.text }}
        </v-tab>
      </v-tabs>
    </v-toolbar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
          title: 'Users and Cars application',
        tab: null,
        items: [
            {
                text: "Users",
                path: "/"
            },
            {
                text: "Cars",
                path: "/cars"
            }

        ]
      }
    }
  }
</script>