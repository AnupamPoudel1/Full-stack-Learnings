type UserType = {
    firstName: string,
    lastName: string,
    age: number
}

const user: UserType = {
    firstName: 'Anupam',
    lastName: 'Poudel',
    age: 23
}

const Header = () => {
    return (
        <div className="bg-gray-900 text-white text-xl h-max px-8 py-4 w-full flec justify-center items-center">
            <div>
                {
                    user.firstName
                }
            </div>
        </div>
    )
}

export default Header
