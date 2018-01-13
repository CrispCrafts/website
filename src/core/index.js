export function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export function rgbToHex(rgb){
    var hex = /\([\s+]?[\d]{0,3},[\s+]?[\d+]{0,3},[\s+]?[\d+]{0,3}[\s+]?(,[\s+]?[\d+]{0,3}[\s+]?)?\)$/i.exec(rgb);
    console.log(hex);
    var splitRGB = hex[0].replace('(', '').replace(')', '').split(',').filter(x => x);
    console.log(splitRGB);
    var a = (splitRGB && splitRGB.length >= 3) ? "#" +
     ("0" + parseInt(splitRGB[0],10).toString(16)).slice(-2) +
     ("0" + parseInt(splitRGB[1],10).toString(16)).slice(-2) +
     ("0" + parseInt(splitRGB[2],10).toString(16)).slice(-2) : '';
     console.log(a);
     return a;
}

export function rgbToString(rgb) {
    console.log(rgb);
    var str = 'rgb(';
    var a = 0;
    for (let c in rgb) {
        console.log(rgb[c]);
        console.log(c);
        str += `${rgb[c]}${a < 2 ? ', ' : ')'}`;
        a += 1;
    }
    console.log(str);
    return str;
}

export function hexToString(hex) {
    if(!hex) {
        return null;
    }
    if (!/^#/.test(hex)) {
        return `#${hex}`;
    }
    return hex;
}

function getLuminance(hex) {
    var color = hexToRgb(hex);
    var C = [color.r/255, color.g/255, color.b/255];
    var NC = C.map((c) => {
        if(c <= 0.03928) {
            return (c/12.92);
        }
        return (((c+0.055)/1.055)**2.4);
    });
    return (0.2126 * NC[0] + 0.7152 * NC[1] + 0.0722 * NC[2]);
}

export function getTextColor(hex) {
    console.log(getLuminance(hex) > 0.179 ? 'TEXT COLOR: BLACK' : 'TEXT COLOR: WHITE');
    return getLuminance(hex) > 0.179 ? '#000000' : '#ffffff';
}

export function validateHexColor(color) {
    var a = /(^[A-Fa-f0-9]{6}$)|(^#[A-Fa-f0-9]{6}$)|(^#[A-Fa-f0-9]{3}$)|(^[A-Fa-f0-9]{3}$)/i.test(color);
    console.log(color, a);
    return a;
}

export function validateRgbColor(color) {
    var a = /(^([rR][gG][bB][aA]?[\s+]?)?\([\s+]?[\d]{0,3},[\s+]?[\d+]{0,3},[\s+]?[\d+]{0,3}[\s+]?(,[\s+]?[\d+]{0,3}[\s+]?)?\)$)/i.test(color);
    console.log(color,)
    return a;
}