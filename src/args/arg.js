/**
 * @module "Arg" class
 * @description Class representing one application argument
 * @version 0.0.1 (2021-02-17)
 */

require("../general/javaScript");

const StringBuilder = require("../general/stringBuilder");

class Arg {
    get template() { return this.mTemplate; }
    get name() { return this.mTemplate.name; }
    get dataType() { return this.mTemplate.dataType; }
    get value() { return this.mValue; }
    get valid() { return this.mValid; }
    set valid(pValue) { this.mValid = pValue; }

    constructor(pTemplate, pValue) {
        this.mTemplate = pTemplate;
        this.mValue = pValue;
        this.mValid = true;
    }

    toString() {
        return StringBuilder.nameValue(this.name, this.value);
    }
}

module.exports = Arg;