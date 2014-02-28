*This repository is a mirror of the [component](http://component.io) module [llinares/angle-convert](http://github.com/llinares/angle-convert). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/llinares-angle-convert`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# angle-convert

  Convert radians to degrees and back

## Installation

  Install with [component(1)](http://component.io):

    $ component install llinares/angle-convert

## API

```js
var angle = require('angle-convert');
```

### degToRad(deg)

```js
angle.degToRad(1); // 0.017453292519943295
```

### radToDeg(rad)

```js
angle.radToDeg(1); // 57.29577951308232
```

## License

  MIT