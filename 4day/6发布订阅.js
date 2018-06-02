function Girl() {
    this._event = {}
}
let girl = new Girl();
Girl.prototype.on = function (eventName, fn) {
    if (this._event[eventName]) {
        this._event[eventName].push(fn);
    } else {
        this._event[eventName] = [fn]
    }
};
Girl.prototype.emit = function (eventName, ...args) {
    if (this._event[eventName]) {
        this._event[eventName].forEach(cb => cb(...args))
    }
};


girl.on('失恋', function (...who) {
    [...who].forEach((item)=>{
        console.log(`${item}' 哭'`);
    })
});
girl.on('失恋', function (...who) {
    [...who].forEach((item)=>{
        console.log(`${item}' 吃'`);
    })
});
girl.on('失恋', function (...who) {
    [...who].forEach((item)=>{
        console.log(`${item}' 睡'`);
    })
});
girl.emit('失恋', '你', '我');