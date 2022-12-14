import React from "react"

class AddUser extends React.Component {
    userAdd = {}

    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    first_name: '',
                    last_name: '',
                    age: 0,
                    email: "",
                    isHappy: false
                }
            ]
        }
    }

    render() {
        return (
            <form ref={(el) => this.myForm = el}>
                <input placeholder="Имя" onChange={(e) => this.setState({ first_name: e.target.value })} />
                <input placeholder="Фамилия" onChange={(e) => this.setState({ last_name: e.target.value })} />
                <input placeholder="email" onChange={(e) => this.setState({ email: e.target.value })} />
                <input placeholder="Возраст" onChange={(e) => this.setState({ age: e.target.value })} />
                <label htmlFor="isHappy">Счастлив?</label>
                <input type="checkbox" id="isHappy" onChange={(e) => this.setState({ isHappy: e.target.checked })} />
                <button type="button" onClick={() => {
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        email: this.state.email,
                        age: this.state.age,
                        isHappy: this.state.isHappy
                    }
                    if (this.props.user)
                        this.userAdd.id = this.props.user.id
                    this.props.onAdd(this.userAdd)
                    this.myForm.reset()
                }}>Добавить</button>
            </form>
        )
    }

}


export default AddUser