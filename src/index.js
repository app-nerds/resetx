import Vue from "vue";

let component = null;

export default {
	/**
	 * Called by Vue when the directive is created
	 * @param {*} el DOM element this directive is attached to
	 */
	inserted(el, _binding, vnode) {
		el.onfocus = () => {
			vnode.elm.parentElement.style.position = "relative";

			if (el.value) {
				component.$el.classList.add("v-reset-input-active");
			}
		};

		el.onblur = () => {
			setTimeout(() => {
				component.$el.classList.remove("v-reset-input-active");
			}, 150);
		};

		let onClick = () => {
			el.value = "";
			el.dispatchEvent(new Event("input"));
			el.focus();
		};

		let resetComponent = Vue.extend({
			render(h) {
				return h("span", {
					domProps: { innerHTML: "&#10006;" },
					class: { "v-reset-input": true },
					style: { position: "absolute", cursor: "default" },
					on: {
						click: onClick
					}
				});
			}
		});

		let span = document.createElement("span");
		el.after(span);

		component = new resetComponent().$mount(span);
	},

	update(el) {
		if (!el.value) {
			component.$el.classList.remove("v-reset-input-active");
		} else {
			component.$el.classList.add("v-reset-input-active");
		}
	}
};