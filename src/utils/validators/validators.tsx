import React from "react";

export const required = (value: any) => {
    if(value) return undefined
    return 'Field is required'
}

export const maxLengthCreator = (maxLength: any) => (value: any) => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`
    return undefined
}


