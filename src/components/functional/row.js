export default {
    functional: true,

    render: (h, { data, children }) => {
        data.staticClass = data.staticClass || ''
        data.staticClass += ' row'

        return h('div', data, children)
    }
}
