import logger, {appName,dummyFunction} from "./tools.mjs";
import { myDummyFunction } from "./tools.mjs";

logger("Welcome to Click Flash!");
logger('This is a mobile photobooth app with custom features! ');
logger(`Let's get started! The application name is ${appName} 
    and their is a dummy function that return ${dummyFunction()} `
);