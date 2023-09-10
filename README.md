## Spider Solitaire

Just a simple Spider Solitaire clone, written in javascript. 
The project utilizes [KineticJS](http://kineticjs.com/) for the canvas/drawing and [howler](http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library) for the sound effects.

## Developing

### Installing Dependencies

After cloning this repo, install dependecies:

```
pnpm i
```

### Testing the app in the browser

To test your work in your browser (with hot reloading!) while developing:

```
pnpm dev-mini
# Alternatively to test in a more advanced WebXDC emulator:
pnpm dev
```

### Building

To package the WebXDC file:

```
pnpm build
```

The resulting optimized `.xdc` file is saved in `dist-xdc/` folder.

### Releasing

To automatically build and create a new GitHub release with the `.xdc` file:

```
git tag -a v1.0.1
git push origin v1.0.1
```
