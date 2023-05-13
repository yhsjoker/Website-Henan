function Style(el) {
    if (!el) {
        console.error('请传入DOM元素！');
        return false;
    };

    this.css = function () {
        var arg = arguments;
        var dom = document.querySelector(el);

        if (1 < arg.length) {
            dom.style[arg[0]] = arg[1];
        }
        else {
            return dom.currentStyle ? dom.currentStyle[arg[0]] : getComputedStyle(dom, null)[arg[0]];
        };
    };
};

export function $(el) {
    return new Style(el);
};