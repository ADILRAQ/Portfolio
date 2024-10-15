// Module declaration for '.svg' files
// Then you can import them without problems
declare module "*.svg" {
    content: any;
    export default content;
}