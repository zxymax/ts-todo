<template>
  <div class="wrapper">
    <todo-input />
    <todo-list :todoList="todoList" />
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted } from 'vue';
import { Store, useStore } from 'vuex';
import TodoInput from './components/TodoInput/Index.vue';
import TodoList from './components/TodoList/Index.vue';
import { IUseTodo, useTodo } from './hooks'

export default defineComponent({
  name: 'App',
  setup() {
    const { setTodoList }: IUseTodo = useTodo();
    const store: Store<any> = useStore();
    onMounted(() => {
      setTodoList();
    })
    return {
      todoList: computed(() => store.state.list)
    }
  },
  components: {
    TodoInput,
    TodoList
  }
})
</script>

<style>

</style>
