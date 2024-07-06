export const QUERY_KEY = {
    getAllUser: () => ["fetchUser"],
    getUsersPaginate: (page: number) => {
        return ["fetchUser", page]
    }
}