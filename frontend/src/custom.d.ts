// declare module '*.svg' {
//     import React = require('react');
//     export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
//     const src: string;
//     export default src;
// }

declare module '*.svg' {
    import React = require('react');
     export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
     const src: string;
    export default src;
}