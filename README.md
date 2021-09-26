# Map playground

This is a playground repo for displaying and interacting with maps in the browser.

So far it uses:

- [leaflet](https://leafletjs.com/)
- [react-leaflet](https://react-leaflet.js.org/)
- [react-leaflet-markercluster](https://github.com/YUzhva/react-leaflet-markercluster)
- [mapbox](https://www.mapbox.com/)

### Development

Run the project locally with

```
yarn install
yarn start
```

You'll need an `.env` file with the mapbox access token to see the custom map style.

### Known issues

- react-leaflet-markercluster has a [known issue](https://github.com/yuzhva/react-leaflet-markercluster/issues/133) around incorrect typings so I've followed a [suggested workaround](https://github.com/yuzhva/react-leaflet-markercluster/issues/133#issuecomment-752617196) to declare the module in an `index.d.ts` file.

- create-react-app has a [known issue](https://github.com/facebook/create-react-app/issues/9468) where it fails to compile if any imported libraries use the `??` operator. I've followed a [suggeted workaround](https://github.com/facebook/create-react-app/issues/9468#issuecomment-843818739) by editing the brwoser targets.
