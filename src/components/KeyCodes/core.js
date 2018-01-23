let keys = {
    8: 'backspace',
    9: 'tab',
    12: 'clear',
    13: 'enter',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    19: 'pause/break',
    20: 'caps lock',
    27: 'escape',
    32: 'space',
    33: 'page up',
    34: 'page down',
    35: 'end',
    36: 'home',
    37: 'left arrow',
    38: 'up arrow',
    39: 'right arrow',
    40: 'down arrow',
    45: 'insert',
    46: 'delete',
    91: 'left command',
    92: 'right command',
    93: 'select key',
    106: 'numpad *',
    107: 'numpad +',
    109: 'numpad -',
    110: 'numpad .',
    111: 'numpad /',
    144: 'num lock',
    145: 'scroll lock',
    165: 'Fn',
    182: 'my computer',
    183: 'my calculator',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: '\''
};

let icons = {
    37: {
        class: 'material-icons',
        name: 'arrow_back'
    },
    38: {
        class: 'material-icons',
        name: 'arrow_upward',
    },
    39: {
        class: 'material-icons',
        name: 'arrow_forward'
    },
    40: {
        class: 'material-icons',
        name: 'arrow_downward'
    }
};

const mac = {
    13: 'return',
    16: 'Shift ⇧',
    17: 'Control ⌃',
    18: 'Option ⌥',
    19: 'pause/break',
    20: 'Caps Lock ⇪',
    91: 'Command ⌘',
    93: 'Command ⌘',
};

const windows = {
    91: 'left windows key',
    92: 'right windows key',
};

const windowsIcon = {
    91: {
        class: 'fa fa-windows',
        name: ''
    },
    92: {
        class: 'fa fa-windows',
        name: ''
    }
}

var i = 0;

// numbers
for(i = 48; i < 58; i++) {
    keys[i] = i-48;
}

// letters
for(i = 65; i < 91; i++) {
    keys[i] = String.fromCharCode(i+32);
}

// function keys f1-f19
for (i = 112; i < 131; i++) {
    keys[i] = `f${i - 111}`;
}

// numpad
for (i = 96; i < 106; i++) {
    keys[i] = `numpad ${i-96}`;
}

var is_OSX = navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i) ? true : false;
var is_Win32 = navigator.platform.match(/(Win|Win32)/i) ? true : false;
if(is_OSX) {
    keys = { ...keys, ...mac };
} else if (is_Win32) {
    keys = { ...keys, ...windows };
    icons = { ...icons, ...windowsIcon };
}

export default function keyCodes(e) {
    var key;

    //check for event object
    if(e) {
        switch(typeof e) {
            case 'object':
                var keyCode = e.which || e.keyCode || e.charCode;
                if(keyCode) key = keyCode;
                break;
            case 'number':
                key = e;
                break;
            case 'string':
                e = e.toLowerCase();
                key = Object.keys(keys).filter((k) => keys[k] === e)[0];
                break;
            default:
                throw Error('Invalid item passed in to keyCodes:', e);
        }
    }

    return {
        key: keys[key],
        icon: icons[key],
        which: e.which,
        keyCode: e.keyCode,
        shiftKey: e.shiftKey,
        altKey: e.altKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey
    };
}