
// const DropDown = (ValueList, FieldId) => {
//     const options = ValueList.map(Name => `<option value="${Name}">`);
//     document.getElementById(FieldId).innerHTML = options.join('');
// };

export function DropDown(ValueList, FieldId) {
    const options = ValueList.map(Name => `<option value="${Name}">`);
    document.getElementById(FieldId).innerHTML = options.join('');
};