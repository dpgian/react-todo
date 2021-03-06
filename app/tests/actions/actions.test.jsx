var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    var res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      text: 'Add a todo'
    };
    var res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate OLD_ADD_TODOS action', () => {
    var todos = [{
      id: '111',
      text: 'sample',
      completed: false,
      completedAt: undefined,
      createdAt: 300
    }];
    var action = {
      type: 'ADD_OLD_TODOS',
      todos
    };
    var res = actions.addOldTodos(todos);

    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate toggle Todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: '1'
    };
    var res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  });
});
