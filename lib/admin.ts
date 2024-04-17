import { auth } from "@clerk/nextjs"
const allowedIds = [
    "user_2eieg2kdIJQJMuJgqjHIcHxkmbW"
]

export const getIsAdmin = () => {
    const { userId } = auth()

    if(!userId)
    {
        return false;
    }

    return allowedIds.indexOf(userId) !== -1;
}