import Load from '../util/load'

export default {
    bind (el, binding, vnode) {
        Load.call(vnode.context, () => {
            el.setAttribute('data-activates', binding.arg)
            $(el).sideNav(binding.value || {
				menuWidth: "100%",
				closeOnClick: true,
				edge:'right',
				draggable: false
			})
        })
    }
}
