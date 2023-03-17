
import { RolesApiEndpoint } from "../routes/api/rolesApi";
import { UsersApiEndpoint } from "../routes/api/usersApi";
import { ApiEndpoint } from "../routes/api/apiEndpoint";

export const REGISTERED_APIS: ApiEndpoint[] = [
    new RolesApiEndpoint(),
    new UsersApiEndpoint(),
];

export function configureApiModule(app: any) {
    for (const api of REGISTERED_APIS) {
        api.registerMethods(app);
    }
}
