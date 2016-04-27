

module.exports.InputEqualsOutput = function() {
    var _text;

    this.setInput = function (text) {
        _text = text;
    };

    this.Output = function () {
        return _text;
    };
}


