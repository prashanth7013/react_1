# react_1
npm init
npm install parcel

dev --> npx parcel index.html
prod build --> npx parcel build index.html

npx --> execute package

# Parcel  (Bundler)
- Dev Build
- Local Server
- Hot Module Replacement
- File Watching Algorithm
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress the files
- Consistent Hashing
- Code Splitting
- Differential Bundling - cross platform to browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree Shaking - remove unused code
- Different dev and prod bundles


# Config in package.json file for browsers
### https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z
### https://browsersl.ist/


Two types of Export/Import

Default Export/Import
export default Component; 
import Component from "path";

Named Export/Import
export const Component; 
import {Component} from "path";

### React Hooks
(Normal JS utility functions)
useState() - Superpowerful State Variables in react
useEffect()