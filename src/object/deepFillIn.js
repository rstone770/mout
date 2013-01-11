define(['./forOwn', '../lang/isPlainObject'], function (forOwn, isPlainObject) {

    /**
     * Deeply copy missing properties in the target from the defaults.
     * @version 0.1.0 (2012/12/19)
     */
    function deepFillIn(target, defaults){
        var i = 0,
            n = arguments.length,
            obj;

        while(++i < n) {
            obj = arguments[i];
            if (obj) {
                forOwn(obj, function(newValue, key) {
                    var curValue = target[key];
                    if (curValue == null) {
                        target[key] = newValue;
                    } else if (isPlainObject(curValue)
                               && isPlainObject(newValue)) {
                        deepFillIn(curValue, newValue);
                    }
                });
            }
        }

        return target;
    }

    return deepFillIn;

});
