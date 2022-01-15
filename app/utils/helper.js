const htmlFontSize = 16;

export const pxToRem = size =>
    typeof size === "number" && !isNaN(size)
        ? `${size / htmlFontSize}rem`
        : "";
