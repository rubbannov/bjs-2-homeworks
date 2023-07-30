//Задача № 1
function cachingDecoratorNew(func) {
    let cache = {};
    return function (...args) {
        if (Object.keys(cache).length > 5) {
            for (key in cache) {
                delete cache[key];
                break;
            };
        };
        const hash = md5(args);
        if (hash in cache) {
            return "Из кеша: " + cache[hash];
        };

        const result = func(...args);
        cache[hash] = result;
        return "Вычисляем: " + result;
    };
};

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
    let flag = true;
    function wrapper(...args) {
        wrapper.allCount++;
        if (timeoutId) {
            clearTimeout(timeoutId);
        } else if (flag) {
            flag = false;
            func(...args);
            wrapper.count++;
        };
        timeoutId = setTimeout(() => {
            func(...args);
            wrapper.count++;
        }, delay);
    };
    wrapper.allCount = 0;
    wrapper.count = 0;
    return wrapper;
};
