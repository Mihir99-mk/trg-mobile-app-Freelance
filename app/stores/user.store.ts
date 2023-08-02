import { create } from 'zustand';

const UserStore: any = create((set: any) => ({
    userDetails: null,

    setUserDetails: (value: any) =>
        set(() => ({
            userDetails: value
        })),

}))

export default UserStore;