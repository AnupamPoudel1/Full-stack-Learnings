import { Component } from "react";

class Header extends Component {
    render() {

        const style = {
            header: {
                background: '#ffffff',
                color: '#000000',
                textAlign: 'center',
            },
            logo: {
                color: '#000000',
                background: '#ffffff'
            }
        }

        return (
            <div className="flex flex-col h-max w-full justify-center items-center bg-black px-8 py-4">
                <div style={style.logo} className="px-4 py-2 header">
                    Logo
                </div>
            </div>
        )
    }
}

export default Header;