import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchImage } from '../../redux/actions';

class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: []
        }
    }
    componentDidMount() {
        this.props.fetchImage()
        
    }
    render() {
        const { images } = this.props
        return (
            <div>
                {images.map((image, key) => (
                    <img alt="" key={key} src={'https://farm' + image.farm + '.staticflickr.com/' + image.server + '/' + image.id + '_' + image.secret + '.jpg'} />
                ))}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    const { images } = state
    
    return { images }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchImage: () => dispatch(fetchImage())
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Images)