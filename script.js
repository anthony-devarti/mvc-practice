class Model {
    constructor() {
        this.toDos = [
            {id: 1, text: 'run a maratho', complete: false},
            {id: 2, text: 'plant a garden', complete: false}
        ]
    }
  
    addTodo(todoText){
        const todo = {
            id: this.toDos.length >0 ? this.toDos[this.toDos.length-1].id+1 : 1
        }
    }
}  
  class View {
    constructor() {}
  }
  
  class Controller {
    constructor(model, view) {
      this.model = model
      this.view = view
    }
  }
  
  const app = new Controller(new Model(), new View())
