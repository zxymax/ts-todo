<template>
  <div>
    <input type="checkbox" :checked="item.status === FINISHED" @click="setStatus(item.id)">
    <span :class="item.status === FINISHED ? 'line-through' : ''">{{item._content}}</span>
    <button @click="removeTodo(item.id)">删除</button>
    <button v-if="item.status !== FINISHED" @click="setDoing(item.id)" :class="item.status === DOING ? 'doing' : 'willdo'">{{item.status === DOING ? '正在做...' : '马上做'}}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, PropType } from 'vue';
import { ITodo, TODO_STATUS } from '../../typings';
interface IStatusState {
  DOING: TODO_STATUS
  WILLDO: TODO_STATUS
  FINISHED: TODO_STATUS
}
export default defineComponent({
  name: 'TodoItem',
  props: {
    item: Object as PropType<ITodo>
  },
  setup(props, {emit}) {
    onMounted(() => {
      console.log(props)
    })
    const statusState: IStatusState = {
      DOING: TODO_STATUS.DOING,
      WILLDO: TODO_STATUS.WILLDO,
      FINISHED: TODO_STATUS.FINISHED
    }
    const removeTodo = (id: number): void => {
      emit('removeTodo', id)
    }
    const setDoing = (id: number): void => {
      emit('setDoing', id)
    }
    const setStatus = (id: number): void => {
      emit('setStatus', id)
    }
    return {
      ...statusState,
      removeTodo,
      setDoing,
      setStatus
    }
  }
})
</script>

<style scoped>
  .line-through {
    text-decoration: line-through;
  }
  .doing {
    background-color: #696969cd;
    color: #ccc;
  }
  .willdo {
    background-color: orange;
    color: #fff;
  }
</style>
