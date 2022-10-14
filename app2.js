import { useSelect } from "./helpers.js";

const elements=useSelect(['.nombre','#btn','#info','#li']);

console.log(elements)