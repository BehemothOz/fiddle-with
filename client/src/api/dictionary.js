import { LOGIN, REGISTRATION, HOME_GET } from './keys';
import home from './entities/home';
import auth from './entities/auth';

export default {
    [LOGIN]: { method: auth.login },
    [REGISTRATION]: { method: auth.registration },
    [HOME_GET]: { method: home.get }
}
