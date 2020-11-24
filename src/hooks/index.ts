import { REMOVE_TODO, SET_TODO, SET_TODO_DOING_STATUS, SET_TODO_LIST, SET_TODO_STATUS } from '@/store/actionTypes';
import { ITodo, TODO_STATUS } from '@/typings';
import { watch } from 'vue';
import { Store, useStore } from 'vuex'

export interface IUseTodo {
  setTodo: (value: string) => void;
  setTodoList: () => void;
  removeTodo: (id: number) => void;
  setStatus: (id: number) => void;
  setDoing: (id: number) => void;
}

function useTodo(): IUseTodo{

  const store: Store<any> = useStore();

  const { setLocalList, getLocalList }: IUseLocalStorage = useLocalStorage()
  const todoList: ITodo[] = getLocalList()

  watch(()=>{
    return store.state.list
  },(todoList)=>{
    setLocalList(todoList)
  })
  function setTodo(value: string): void {
    const todo: ITodo = {
      id: new Date().getTime(),
      _content: value,
      status: TODO_STATUS.WILLDO
    }
    store.dispatch(SET_TODO, todo)
    // setLocalList(store.state.list)
  }
  function setTodoList() {
    store.dispatch(SET_TODO_LIST ,todoList)
    console.log(store.state.list)
  }
  function removeTodo(id: number) {
    console.log('removeTodo')
    store.dispatch(REMOVE_TODO, id)
    // setLocalList(store.state.list)
  }
  function setStatus(id: number) {
    console.log('setStatus')
    store.dispatch(SET_TODO_STATUS, id)
    // setLocalList(store.state.list)
  }
  function setDoing(id: number) {
    store.dispatch(SET_TODO_DOING_STATUS, id);
    // setLocalList(store.state.list)
    console.log('setDoing')
  }
  return {
    setTodo,
    setTodoList,
    removeTodo,
    setStatus,
    setDoing
  }
}
interface IUseLocalStorage {
  getLocalList: () => ITodo[],
  setLocalList: (todoList: ITodo[]) => void;
}
function useLocalStorage(): IUseLocalStorage {
  function getLocalList(): ITodo[] {
    return JSON.parse(localStorage.getItem('todoList') || '[]')
  }
  function setLocalList(todoList: ITodo[]): void {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }
  return {
    getLocalList,
    setLocalList
  }
}

export {
  useTodo
}
