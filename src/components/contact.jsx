class Contact extends React.Component {
    render() {
        return (
            <div
                /* className={"el "} */
                onMouseEnter={(e) => {
                    this.props.hover(this.props.phone)
                }}
                className={this.props.hoverClass ? "el hover" : "el"}
            >
                <img src={this.props.img} alt="" />
                <h1>{this.props.name}</h1>
                <h2>{this.props.phone}</h2>
                <h5>Last coll: 10/05/2017</h5>
            </div>
        )
    }
}



