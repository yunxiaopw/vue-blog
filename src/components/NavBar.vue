<template>
  <nav>
    <!-- header -->
    <v-app-bar flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="grey--text">
        <span class="font-weight-light">
          CoderPan
        </span>
        <span>Blog</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="ml-8 hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <!-- header-menu-->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="grey" text v-bind="attrs" v-on="on">
            <v-icon left>expand_more</v-icon>
            <span>导航</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            router
            :to="link.route"
          >
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text color="grey">
        <span>登录</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
      <v-btn text color="grey">
        <span>退出</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- sideBar -->
    <v-navigation-drawer app v-model="drawer" class="success">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar.jpg" />
          </v-avatar>
          <p class="nickname white--text subheading mt-1">
            firework
          </p>
        </v-flex>
      </v-layout>
      <v-row justify="center">
        <v-col cols="5">
          <v-btn icon block class="black--text">
            <v-icon>mdi-github</v-icon>
            <a style="color:black" 
               target="_blank"
               href="https://github.com/pstXZ">github</a>
          </v-btn> 
        </v-col>
        <v-col cols="5">
          <v-btn icon block class="black--text">
            <v-icon>mdi-email</v-icon>
            <span>email</span>
          </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-container>
        <div class="newArticle">最新文章</div>        
        <div class="art-content">- 由浅入深，66条JavaScript面试知识点</div>
        <div class="art-content">- 由浅入深，66条JavaScript面试知识点</div>
        <div class="art-content">- 由浅入深，66条JavaScript面试知识点</div>
      </v-container>
      <v-divider></v-divider>
      <v-container>
        <div>标签</div>
        <v-chip small class="white--text caption mx-1 my-2" color="#ff9c0a">react</v-chip>
        <v-chip small class="white--text caption mx-1 my-2" color="#f44336">vue</v-chip>
        <v-chip small class="white--text caption mx-1 my-2" color="#9652ff">javascript</v-chip>
        <v-chip small class="white--text caption mx-1 my-2" color="#ffaac2">css</v-chip>
        <v-chip small class="white--text caption mx-1 my-2" color="#ff9c0a">react</v-chip>
        <v-chip small class="white--text caption mx-1 my-2" color="#f44336">vue</v-chip>
        <v-chip small class="white--text caption mx-1 my-2" color="#9652ff">javascript</v-chip>
        <v-chip small class="white--text caption mx-1 my-2" color="#ffaac2">css</v-chip>
        <v-chip small class="white--text caption mx-1 my-2" color="#ff9c0a">react</v-chip>
        <v-chip small class="white--text caption mx-1 my-2" color="#f44336">vue</v-chip>
        <v-chip small class="white--text caption mx-1 my-2" color="#9652ff">javascript</v-chip>
        <v-chip small class="white--text caption mx-1 my-2" color="#ffaac2">css</v-chip>
      </v-container>     
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      links: [
        { icon: 'dashboard', text: '首页', route: '/' },
        { icon: 'folder', text: '归档', route: '/projects' },
        { icon: 'person', text: '分类', route: '/team' },
        { icon: 'person', text: '关于', route: '/about' },
      ],
    }
  },
}
</script>
<style scoped>
.nickname {
  text-align: center;
  font-size: 20px;
}
.newArticle {
  font-weight: 600;
}
.art-content {
  margin-top: 16px;
  font-size: 14px;
}
a {
  text-decoration: none;  
}
</style>
