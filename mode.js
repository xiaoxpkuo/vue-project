function Dep() {
    this.subs = [];
}
Dep.prototype.addSu = function (sub) {
    this.subs.push(sub);
};
Dep.prototype.notify = function () {
    this.subs.forEach(sub => sub.update())
};

function Watch(fn) {
    this.fn = fn;
}
Watch.prototype.update = function () {
    this.fn();
};
let watch = new Watch(()=>console.log(1));

let dep=new Dep();

dep.addSu(watch);
dep.addSu(watch);

dep.notify();