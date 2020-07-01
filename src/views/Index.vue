<template>
  <v-row class="content">
    <v-col xs="12" sm="12" md="9" lg="9" xl="9">    
        <v-card class="mx-auto mb-5" max-width="900" min-height="300">
          <v-container fluid>
              <v-row>
                <v-col class="mt-2 flex">
                  <v-title class="title">我是一个标题我是一个标题我是一个标题</v-title>
                  <v-icon small>calendar_today</v-icon>
                  <span class="date">2020-7-1</span>
                  <v-icon class="ml-4" small>whatshot</v-icon>
                  <span class="count">2000</span>
                  <v-icon class="ml-4" small>label</v-icon>
                  <v-chip class="ml-2 mr-2 white--text" x-small label color="#f5222d">react</v-chip>
                  <v-chip class="mr-2 white--text" x-small label color="#2db7f5">JavaScript</v-chip>                  
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <article>
              </article>
          </v-container>
        </v-card>
        <v-card class="mx-auto mb-5" max-width="900" min-height="300">
          <v-container fluid>
              <v-row>
                <v-col class="mt-2 flex">
                  <v-title class="title">我是一个标题我是一个标题我是一个标题</v-title>
                  <v-icon small>calendar_today</v-icon>
                  <span class="date">2020-7-1</span>
                  <v-icon class="ml-4" small>whatshot</v-icon>
                  <span class="count">2000</span>
                  <v-icon class="ml-4" small>label</v-icon>
                  <v-chip class="ml-2 mr-2 white--text" x-small label color="#f5222d">react</v-chip>
                  <v-chip class="mr-2 white--text" x-small label color="#2db7f5">JavaScript</v-chip>                  
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <article>
              </article>
          </v-container>
        </v-card>
        <v-card class="mx-auto mb-5" max-width="900" min-height="300">
          <v-container fluid>
              <v-row>
                <v-col class="mt-2 flex">
                  <v-title class="title">我是一个标题我是一个标题我是一个标题</v-title>
                  <v-icon small>calendar_today</v-icon>
                  <span class="date">2020-7-1</span>
                  <v-icon class="ml-4" small>whatshot</v-icon>
                  <span class="count">2000</span>
                  <v-icon class="ml-4" small>label</v-icon>
                  <v-chip class="ml-2 mr-2 white--text" x-small label color="#f5222d">react</v-chip>
                  <v-chip class="mr-2 white--text" x-small label color="#2db7f5">JavaScript</v-chip>                  
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <article>
              </article>
          </v-container>
        </v-card>
        <v-card class="mx-auto mb-5" max-width="900" min-height="300">
          <v-container fluid>
              <v-row>
                <v-col class="mt-2 flex">
                  <v-title class="title">我是一个标题我是一个标题我是一个标题</v-title>
                  <v-icon small>calendar_today</v-icon>
                  <span class="date">2020-7-1</span>
                  <v-icon class="ml-4" small>whatshot</v-icon>
                  <span class="count">2000</span>
                  <v-icon class="ml-4" small>label</v-icon>
                  <v-chip class="ml-2 mr-2 white--text" x-small label color="#f5222d">react</v-chip>
                  <v-chip class="mr-2 white--text" x-small label color="#2db7f5">JavaScript</v-chip>                  
                </v-col>
              </v-row>
              <v-divider></v-divider>
              <article>
              </article>
          </v-container>
        </v-card>
        
    </v-col>
    <v-col class="hidden-sm-and-down" sm="0" md="3" lg="3" xl="3">
     
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      cards: [
        { title: 'Pre-fab homes', date:'2020-7-1', classfiy:'vuejs', count:'3000'}
      ]
    }
  }

}
</script>
<style scoped>
  .content {
    margin: 0;
    padding: 0;
  } 
  .title {
    display: block;
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
  }
  .title:hover {
    color: aquamarine;
  }
  .date {
    display: inline-block;
    margin-left: .3rem;
    font-size: .7rem;
  }
  .count {
    font-size: .7rem;
    margin-left: .3rem;
  }
</style>
