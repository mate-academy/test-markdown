const wrap = (el, wrapper) => {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

const addEvents = (trigger, content) => {
    trigger.addEventListener('click', (e) => {
        if (e.target.closest('.anchorjs-link ')) {
            return;
        }
        content.classList.toggle('is-active');
    })
    document.addEventListener('click', (e) => {
        if (trigger.contains(e.target) || content.contains(e.target)) {
            return;
        }
        content.classList.remove('is-active');
    })
}

const createDropdown = (trigger, content) => {
    const name = 'ma-dropdown';

    const wrapper = document.createElement('div');
    wrapper.classList.add(name);

    const triggerNode = document.createElement('div');
    triggerNode.classList.add(`${name}__trigger`);

    const contentNode = document.createElement('div');
    contentNode.classList.add(`${name}__content`);

    wrapper.append(triggerNode, contentNode);
    wrap(trigger, wrapper);

    triggerNode.append(trigger);
    contentNode.append(...content);

    addEvents(triggerNode, contentNode);

    content.length = 0;
}

const parseContent = (elements) => {
    const stack = [];
    const content = [];

    elements.forEach(element => {
        const {tagName} = element;
        const lastElement = stack[stack.length - 1];

        if (/H[2-6]/.test(tagName)) {
            if (lastElement && tagName === lastElement.tagName) {
                createDropdown(stack.pop(), content);
            }
            stack.push(element);
        } else {
            stack.length && content.push(element);
        }
        if (!element.nextSibling) {
            createDropdown(stack.pop(), content);
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('.markdown-body');
    const items = Array.from(body.childNodes);
    parseContent(items);
})