<template>
  <div>
    <h2>Todolist</h2>
    <todo-item v-for="(item, index) of todoList" :key="item.id" :item="item" @removeTodo="removeTodo" @setStatus="setStatus" @setDoing="setDoing"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from 'vue';
import { useTodo } from '../../hooks';
import { ITodo } from '../../typings';
import TodoItem from './Item.vue';

export default defineComponent({
  name: 'Todolist',
  props: {
   todoList: Array as PropType<ITodo[]>
  },
  setup(props) {
    const { removeTodo, setStatus, setDoing } = useTodo();
    onMounted(() => {
      console.log('todolist----')
      console.log(props)
    })
    return {
      removeTodo,
      setStatus,
      setDoing
    }
  },
  components: {
    TodoItem
  }
})
</script>

<style>

</style>
