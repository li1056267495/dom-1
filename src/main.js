const div = dom.create("<div>newDiv</div>")
console.log(div)

dom.after(test, div)

const div3 = dom.create('<div id="parent"></div>')
dom.wrap(test, div3)


dom.empty(empty)

const div4 = dom.create('<div id="test2"></div>')
dom.before(div, div4)

dom.attr(test, 'title', 'Hi,i am Li')
const title = dom.attr(test, 'title')
console.log(`title: ${title} `)

dom.text(test, '这是新加的内容')

dom.html(test2, '又加了内容')

dom.style(test, { birder: '1px solid red', color: 'blue' })
console.log(dom.style(test, 'border'))
console.log(dom.style(test, 'border', '1px solid black'))

dom.class.add(test, 'red')
dom.class.remove(test, 'red')

const fn = () => {
    console.log('点击了')
}
dom.on(test, 'click', fn)

const testDiv = dom.find('#test')[0]
console.log(testDiv)
const test3 = dom.find('#test3')[0]
console.log(test3)


console.log(dom.parent(test))

console.log(dom.siblings(dom.find('#s2')[0]))

const t = dom.find('#travel')[0]
dom.each(dom.children(t), (n) => dom.style(n, 'color', 'red'))


console.log(dom.index(s2))