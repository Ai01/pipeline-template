console.info('running preview inserted script');

const receiveMessage = (event) => {
  if (!event.data) return;

  const componentId = event.data.currentComponent.id;
  const selector = `div[data-component-id="${componentId}"]`;
  const targetComponent = document.querySelector(selector);
  targetComponent.scrollIntoView();
};

window.addEventListener('message', receiveMessage, false);