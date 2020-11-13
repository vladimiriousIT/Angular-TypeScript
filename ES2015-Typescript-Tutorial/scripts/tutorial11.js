"use strict";
var employee1 = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { console.log(_this.id); }, 1000);
    }
};
employee1.greet();
//# sourceMappingURL=tutorial11.js.map