export const UPDATE_USRR = 'users:updateUser';

export function updateUser(newUser) {
    return {
        type: UPDATE_USRR,
        payload: {
            user:newUser
        }
    }
}