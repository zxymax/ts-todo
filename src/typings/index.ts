interface ITodo {
  id: number;
  _content: string;
  status: TODO_STATUS;
}

interface IState {
  list: ITodo[]
}

enum TODO_STATUS {
  FINISHED = 'finished',
  DOING = 'doing',
  WILLDO = 'willdo',
}

export {
  ITodo,
  IState,
  TODO_STATUS
}
