import React from 'react';
import '../style/BackToTop.css';
import { scrollToTop } from '../helper';


class BackToTop extends React.Component {

    state = { showButton: false }
    onBackToTop() {
        scrollToTop();
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll, { passive: true })
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    }

    handleScroll = () => {
        if (document.documentElement.scrollTop > 100) {
            if (!this.state.showButton)
                this.setState({ showButton: true });
        } else {
            if (this.state.showButton)
                this.setState({ showButton: false });
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.showButton ?
                        <button onClick={() => this.onBackToTop()} className="ui icon button back-to-top">
                            <i className="angle up icon"></i>
                        </button>
                        :
                        null
                }
            </div>

        );
    }
};

export default BackToTop;
