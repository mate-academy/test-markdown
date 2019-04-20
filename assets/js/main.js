const wrap = (el, wrapper) => {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

const addEvents = (wrapper, trigger) => {
    trigger.addEventListener('click', (e) => {
        if (e.target.closest('.anchorjs-link ')) {
            return;
        }
        wrapper.classList.toggle('is-active');
    })
    // document.addEventListener('click', (e) => {
    //     if (wrapper.contains(e.target)) {
    //         return;
    //     }
    //     wrapper.classList.remove('is-active');
    // })
}

const createDropdown = (trigger, content) => {
    console.log(trigger)
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

    addEvents(wrapper, triggerNode);

    content.length = 0;

    return wrapper;
}

const parseContent = (elements, level = 2, index = 0) => {
    let heading = null;
    const content = [];
    const dropdowns = [];

    for (let i = index; i < elements.length; i += 1) {
        const currentElement = elements[i];
        const {tagName} = currentElement;
        if (/H[2-6]/.test(tagName)) {
            if (!heading) {
                heading = currentElement;
                continue;
            }
            const currentLevel = parseInt(
                tagName.replace(/[^\d.]/g, ''),
                10);
            if (currentLevel > level) {
                const {items, newIndex} = parseContent(elements, currentLevel, i);
                content.push(...items);
                i = newIndex;
            }
            if (currentLevel < level) {
                dropdowns.push(createDropdown(heading, content));
                return {items: dropdowns, newIndex: i - 1};
            }
            if (currentLevel === level) {
                dropdowns.push(createDropdown(heading, content));
                heading = currentElement
            }


        } else {
            !!heading && content.push(currentElement);
        }
        if (i === elements.length - 1 && heading) {
            dropdowns.push(createDropdown(heading, content));
        }
    }
    return dropdowns;
}

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('.markdown-body');
    let items = Array.from(body.childNodes)
    parseContent(items);
})