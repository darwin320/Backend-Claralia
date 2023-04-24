

import { ApiEndpoint } from "../routes/api/apiEndpoint";


export const REGISTERED_APIS: ApiEndpoint[] = [

    
];
//CONFIGURA MODULIS
export function configureApiModule(app: any) {
    for (const api of REGISTERED_APIS) {
        api.registerMethods(app); 
    }
}
