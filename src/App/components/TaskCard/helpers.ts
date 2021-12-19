export const nothingIsEditing = {
    title: false,
    body: false,
    tags: false,
}
export const everythingIsEditing = {
    title: true,
    body: true,
    tags: true,
}


export function createFieldSetter(setterFunc: (a: any) => void, newData: any) {
    return function (field: string, value: any) {
        setterFunc({...newData, [field]: value});
    }
}

// function setFieldValue(field: string, value: any) {
//     setNewData({...newData, [field]: value});
// }