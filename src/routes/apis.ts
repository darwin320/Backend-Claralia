

import { ApiEndpoint } from "../routes/api/apiEndpoint";
import { CamapanaApiEndpoint } from "./api/campanaApi";


export const REGISTERED_APIS: ApiEndpoint[] = [
    
    new CamapanaApiEndpoint()
];
//CONFIGURA MODULIS



export function configureApiModule(app: any) {
    for (const api of REGISTERED_APIS) {
        api.registerMethods(app); 
    }
}
