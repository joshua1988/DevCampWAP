<template>
    <div>
      <input type="text" name="" id="" v-model="inputValue" placeholder="할일을 적어주세요" @keypress.enter="submit">      
      <ul>
          <li v-if="(vComplete & todo.flag) | (vTodo & !todo.flag) | (vComplete & vTodo)" v-for="(todo, i) in todos" @click.self="flagToggle(todo, i)" v-bind:class="{complete:todo.flag}">
              <a href="javascript:;" class="chk"></a>
              <span>{{todo.todoName}}</span>
              <button @click.stop="btnRemove(i)">삭제</button>
          </li>
      </ul>
      <div class="panel">
          <a href="javascript:;" @click="viewAll">All</a>
          <a href="javascript:;" @click="viewTodo">To do</a>
          <a href="javascript:;" @click="viewComplete">Complete</a>
          <a href="javascript:;" @click="deleteAll">Clear All</a>
      </div>
    </div>
</template>

<script>
export default {
    data:function(){
        return {
            inputValue:'',
            vComplete:true,
            vTodo:true,
            todos: JSON.parse(localStorage.getItem("todo"))
        }
    },
    methods:{
        submit:function(){            
            var obj = this;
            if(obj.inputValue == ""){return;}
            if(obj.todos == null){obj.todos = new Array()}
            obj.todos.push({
                flag:false,
                todoName: obj.inputValue
            });
            obj.inputValue = "";
            localSet("todo", obj)
        },
        flagToggle: function(todo, i){
            var obj = this;
            obj.todos[i].flag = !todo.flag;
            localSet("todo", obj)
        },
        btnRemove:function(i){
            var obj = this;
            obj.todos.splice(i,1)
            localSet("todo", obj)
        },
        viewComplete:function(){
            this.vComplete = true;
            this.vTodo = false;
        },
        viewTodo: function(){
            this.vComplete = false;
            this.vTodo = true;
        },
        viewAll: function(){
            this.vComplete = true;
            this.vTodo = true;
        },
        deleteAll: function(){
            var obj = this;
            obj.todos = [];
            this.viewAll();
            localSet("todo", obj)
        }
    }
}

function localSet(txt, obj){
    var target = obj.todos
    if(target.length > 0){
        localStorage.setItem(txt, JSON.stringify(target))
    }else{
        localStorage.removeItem(txt)
    }
}
</script>

<style>
    input[type=text] {height: 30px; line-height: 32px; font-size: 1.7rem; display: block; text-align: center; width:80%; border: 1px solid #ccc; margin:0 auto; border-radius: 5px;}
    ul {width:80%; margin:0 auto; margin-top:10px;}
    li {height:30px; line-height: 32px; font-size: 1.7rem; color:#000; display: flex; align-items: center; padding:0 5px; margin-bottom: 5px; position: relative}
    li a.chk {width:25px; height:25px; display: inline-block; border:1px solid #ccc; border-radius: 50%; margin-right: 5px;}
    li.complete a {border:1px solid #b9d2b9; position: relative}
    li.complete a:after {
        position: absolute; top:50%; left:50%; margin-top:-9px; margin-left: -3px;
        /*Add another block-level blank space*/
        content: '';
        display: block;
        /*Make it a small rectangle so the border will create an L-shape*/
        width: 6px;
        height: 12px;
        /*Add a white border on the bottom and left, creating that 'L' */
        border: solid #b9d2b9;
        border-width: 0 2px 2px 0;
        /*Rotate the L 45 degrees to turn it into a checkmark*/
        transform: rotate(45deg);
    }
    li span {font-size: 1.5rem;}
    li button {position:absolute; top:2px; right:0px;font-size: 1.2rem; height: 25px; padding:0 7px; line-height: 22px; display: inline-block}
    .panel {height: 20px; width:80%; margin:0 auto; margin-top: 5px; text-align: right}
    .panel a {display: inline-block; height: 20px; line-height: 19px; color:#000; border: 1px solid #ccc; border-radius: 2px; padding:0 7px; margin-right: 5px;}
    .panel a:last-child {margin-right: 0px;}
</style>