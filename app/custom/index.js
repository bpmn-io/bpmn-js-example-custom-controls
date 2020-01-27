import CustomContextPad from './CustomContextPad';
import CustomPaletteProvider from './CustomPaletteProvider';
import Palette from './Palette';

export default {
    __init__: ['customContextPad', 'customPaletteProvider', 'palette'],
    customContextPad: ['type', CustomContextPad],
    customPaletteProvider: ['type', CustomPaletteProvider],
    palette: ['type', Palette],
};