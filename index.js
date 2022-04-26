const focus = require("./package/focus");

const directives = [focus];

function install(Vue) {
  directives.forEach((directive) => {
    Vue.directive(directive.name, directive);
  });
}
module.exports = {
  install,
  focus,
};
