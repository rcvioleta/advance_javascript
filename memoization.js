const users = () => {
  const state = {
    users: {}
  }

  return Object.assign(state, fetch(state))
}


const fetch = state => ({
  fetchUsers: user => {
    if (user in state.users) {
      return state.users[user]
    } else {
      console.log('getting data from database')
      state.users[user] = user
      return state.users[user]
    }
  }
})

const newUser = users()
newUser.fetchUsers('Mario')
newUser.fetchUsers('Mario')
newUser.fetchUsers('Luigi')
newUser.fetchUsers('Luigi')
newUser.fetchUsers('Yoshi')
newUser