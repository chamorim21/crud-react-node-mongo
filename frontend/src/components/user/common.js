export const getUpdatedList = (user, props, add = true) => {
  const list = props.state.list.filter((u) => u._id !== user._id);
  if (add) list.unshift(user);
  return list;
};

export const notify = (text, colorNotify, toast, Slide) =>
  toast[colorNotify](text, {
    position: "top-right",
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    transition: Slide,
  });

export const clear = (props, initialState) => {
  props.handleParent.setUser(initialState.user);
};
