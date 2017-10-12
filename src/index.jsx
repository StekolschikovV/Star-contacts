class Root extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            contacts: [
                {
                    name: 'Luke Skywalker',
                    phone: '+3051465151616',
                    img: './img/luke.png',
                    hover: false
                },
                {
                    name: 'Vanga',
                    phone: '+3051465151636',
                    img: './img/vanga.jpg',
                    hover: false
                },
                {
                    name: 'Terminator',
                    phone: '+3051465151625',
                    img: './img/Terminator.jpg',
                    hover: false
                },
                {
                    name: 'Darth Vader',
                    phone: '+3051465151626',
                    img: './img/vader.jpeg',
                    hover: false
                },
            ],
            input: ''
        }
    }

    show() {
        let temp
        if (this.state.input == '')
            temp = this.state.contacts
        else {
            let thet = this
            let t = this.state.contacts.filter((e, i) => {
                let name = e.name.toLowerCase()
                let phone = e.phone
                let input = this.state.input.toLowerCase()
                return name.indexOf(input) !== -1 || phone.indexOf(input) !== -1
            })
            temp = t
        }
        return (temp.map((e, i) => {
            return (
                <Contact
                    key={i}
                    name={e.name}
                    phone={e.phone}
                    img={e.img}
                    hover={this.hover.bind(this)}
                    hoverClass={e.hover}
                />
            )
        }))
    }

    render() {
        return (
            <div className="root-container">
                <input
                    type="text"
                    value={this.state.input}
                    onChange={(e) => {
                        this.setState({
                            input: e.target.value
                        })
                    }}
                />
                <div className="contact-group">
                    {this.show()}
                </div>
            </div>
        );
    }

    hover(p) {
        for(let i = 0; i < this.state.contacts.length; i++){
            let res = false
            let contacts = this.state.contacts
            if(this.state.contacts[i].phone == p)
                res = true
            else 
                res = false
            contacts[i].hover = res
            this.setState({
                contacts
            })
        }
    }

}
ReactDOM.render(<Root />, document.getElementById('root'));
