module.exports = scenario;

function scenario(log, cb) {
    function start() {
        process.nextTick(thing);
    }

    var value = 97;
    log.info({value:value},"sce

    function foo() {
        value *= 13;
        cb(value);
    }

    start();

    function racer() {
        value &= 255;
        cb(value);
        setTimeout(foo, 0);
    }

    //value = 213;
    cb(value);
    log.error(value);

    function thing() {
        value += 131;
        cb(value);
        process.nextTick(racer);
    }
}
