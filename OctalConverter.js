function convert(value) {
    const type = typeof(value);
    if(type == 'number') {
        return parseInt(value.toString(8));
    } else if (type == 'string') {
        return parseInt(value, 8);
    } else {
        return null;
    }
}

exports.convert = convert;
