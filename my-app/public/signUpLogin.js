
exports.DropDown = (ValueList, FieldId) => {
    const options = ValueList.map(Name => `<option value="${Name}">`);
    document.getElementById(FieldId).innerHTML = options.join('');
};