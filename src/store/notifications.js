export const state = () => ({
  list: [],
});

export const mutations = {
  add(state, newNotification) {
    state.list.push(newNotification);
  },
  remove(state, notificationId) {
    state.list.splice(
      state.list.findIndex(notification => notification.id === notificationId),
      1
    );
  }
};
