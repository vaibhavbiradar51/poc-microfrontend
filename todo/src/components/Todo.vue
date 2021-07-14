<template>
  <div class="about pa-10"  >
    <v-list min-width="200px">
      <v-list-item>
        <v-list-item-content
            class="pa-2"
            elevation="4"
            outlined
          >
          <v-list-item-title>
            <h2>To-Do Tasks</h2>  
            
              <v-list-item-action class="float-right">
              <v-checkbox :input-value="this.hideDone"
                @click="toggle()"
              ></v-checkbox>
              Show Undone Tasks Only
              </v-list-item-action>
            
          </v-list-item-title>


          <v-list-item
              class="pa-0 mt-4"
            >
            <v-text-field
            v-model="newTaskName"
            outlined
            clearable
            @click:append="addTask()"
            @keyup.enter="addTask()"            
            hide-details
            label="Add Task"
            append-icon="mdi-plus"
            
          ></v-text-field>
          
        
          </v-list-item>
            <v-list-item 
              class="pa-0 ma-0" 
              v-if="tasks.length ===0">
              No Tasks 
            </v-list-item>  
          
          <div
            class="pa-0 ma-0"
              v-for="task in tasks"
              :key="task.id"  
              @click="doneTask(task.id)"
              :class="{'blue lighten-5' : task.done}"
          >
            <div
              v-if="hideDone==true&&task.done==false"
            >
            <v-list-item>
              <template>
                <v-list-item-action>
                  <v-checkbox :input-value="task.done"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content
                  :class="{'text-decoration-line-through' : task.done}"
                >
                  <v-list-item-title>{{task.name}}</v-list-item-title>
                </v-list-item-content>
                

                <v-list-item-action>
                  <v-btn 
                    @click.stop="deleteTask(task.id)"
                    icon
                  >
                    <v-icon color="blue lighten-2">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>

              </template>
            </v-list-item>
            </div>
            <div
              v-else-if="!hideDone"
            >
              <v-list-item>
              <template>
                <v-list-item-action>
                  <v-checkbox :input-value="task.done"></v-checkbox>
                </v-list-item-action>

                <v-list-item-content
                  :class="{'text-decoration-line-through' : task.done}"
                >
                  <v-list-item-title>{{task.name}}</v-list-item-title>
                </v-list-item-content>
                

                <v-list-item-action>
                  <v-btn 
                    @click.stop="deleteTask(task.id)"
                    icon
                  >
                    <v-icon color="blue lighten-2">mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-action>

              </template>
            </v-list-item>
            
            </div>
          </div>
      
          
        </v-list-item-content>

      </v-list-item>

    </v-list>
    
  </div>
</template>

<script>


  export default {
    name: 'ToDo',
    data(){
      return {
        hideDone:false,
        newTaskName:'',
        tasks:[
          
        ]
      }
    },
    methods:{
      toggle()
      {
        this.hideDone = !this.hideDone
        console.log(this.hideDone)
      },
      deleteTask(id)
      {
        console.log('abs');
        this.tasks = this.tasks.filter(task => task.id !== id)
        window.localStorage.setItem('tasks',JSON.stringify(this.tasks))
        
      },
      
      addTask()
      {
          if (this.newTaskName === '') return 
          const c = this.newTaskName
          let newTask = {
          id : Date.now(),
          name : c,
          done:false
        }
        this.tasks.push(newTask)
        this.newTaskName=''
        window.localStorage.setItem('tasks',JSON.stringify(this.tasks))
      },
      getUnits(){
        this.tasks = JSON.parse(window.localStorage.getItem('tasks'))
        if (this.tasks == null)
        {
          this.tasks = []
          window.localStorage.setItem('tasks',[])
        }
      },
      doneTask(id){
        let task = this.tasks.filter(task => task.id === id)[0]
        task.done = !task.done
        window.localStorage.setItem('tasks',JSON.stringify(this.tasks))
      }
    },
    beforeMount(){
          this.getUnits()
      },
    components: {
      
    },
  }
</script>

