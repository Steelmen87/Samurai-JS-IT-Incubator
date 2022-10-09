import React from 'react'

export const required = (value: string) => {
    if (value) return undefined;
    return 'Field is required'
}
export const maxLength = (max: number) => (value: string) => {
    if (value && value.length > max) return `max length >${max}`;
    return undefined
}