<template>
  <v-dialog persistent v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar color="primary" dark flat>
        <v-toolbar-title>登录</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon large v-on="on">
              <v-icon @click="dialog = false">mdi-close</v-icon>
            </v-btn>
          </template>
          <span>关闭</span>
        </v-tooltip>
      </v-toolbar>
      <v-card-text>
        <v-form>
          <v-text-field
            label="user"
            name="login"
            prepend-icon="mdi-account"
            type="text"
          ></v-text-field>

          <v-text-field
            id="password"
            label="Password"
            name="password"
            prepend-icon="mdi-lock"
            type="password"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary">Login</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data() {
    return {
      dialog: false
    }
  }
}
</script>
